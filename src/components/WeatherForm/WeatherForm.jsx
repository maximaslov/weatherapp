import React, { useContext } from 'react';
import styles from './WeatherForm.module.css';
import { Formik, useFormik } from 'formik';
import { weatherFormSchemaEnglish, weatherFormSchemaUkraine } from './weatherFormSchema';
import { WeatherContext } from '../../Context';
import Error from '../Error/Error';

const WeatherForm = () => {
    const data = useContext(WeatherContext);

    const formik = useFormik({
        initialValues: {city: ""},
        onSubmit: () => {
            const {city} = formik.values;
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
                    {isInputError && <Error errorMessage={formik.errors.city}/>}
                    {formik.status && <Error errorMessage={formik.status}/>}
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