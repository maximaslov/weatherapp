import React, { useContext } from 'react';
import styles from './WeatherForm.module.css';
import { Formik, useFormik } from 'formik';
import { weatherFormSchemaEnglish, weatherFormSchemaUkraine } from './weatherFormSchema';
import { WeatherContext } from '../../Context';
import Error from '../Error/Error';
import { WeatherApi } from '../../api';

const WeatherForm = () => {
    const data = useContext(WeatherContext);

    const formik = useFormik({
        initialValues: {city: ""},
        onSubmit: () => {
            const {city} = formik.values;
            WeatherApi.getCityWeather(city)
                .then((res)=> {
                    data.setCurrentBackground(res)
                    console.log(res.data)
                    data.setCurrentWeather(res.data)
                    data.setDescription(data.currentWeather.weather[0].description)
                    })
                    .catch(e => {
                    data.setServerError(e.response.data.message)
                    });
            formik.resetForm();

        },
        handleChange: () => {
            isInputError && data.setShownError(true);
            console.log(formik.values);
        },
        validationSchema: data.isEnglishLanguage ? weatherFormSchemaEnglish : weatherFormSchemaUkraine,
    });

    const isInputError = formik.errors.city|| formik.touched.city;

    return (
        <div className={styles.weatherFormContaner}>
            <div className={styles.weatherFormBox}>
                <Formik>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input
                                className={styles.input}
                                value={formik.values.city}
                                type='text'
                                name='city'
                                placeholder={data.isEnglishLanguage ? 'Enter city name' : 'Введіть назву міста'}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <button 
                            className={styles.weatherBtn}
                            disabled={!formik.values.city ? true : false}
                            type={'submit'}>
                                {data.isEnglishLanguage ?  'Show weather' : 'Показати погоду'}
                        </button>
                        <p className={styles.separator}>{data.isEnglishLanguage ? "or" : "або"}</p>
                        
                    </form>
                </Formik>
                <button className={styles.weatherBtn}>
                    {data.isEnglishLanguage ?  'Determine location' : 'Визначити місцезнаходження'}
                </button>
            </div>
        </div>
        
    )
}

export default WeatherForm;