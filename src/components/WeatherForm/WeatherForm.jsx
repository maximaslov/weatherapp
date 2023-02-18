import React, { useContext, useState } from 'react';
import styles from './WeatherForm.module.css';
import { Formik, useFormik } from 'formik';
import { weatherFormSchemaEnglish, weatherFormSchemaUkraine } from './weatherFormSchema';
import { WeatherContext } from '../../Context';
import { WeatherApi } from '../../api';

const WeatherForm = () => {
    const data = useContext(WeatherContext);

    const formik = useFormik({
        initialValues: {city: ""},
        onSubmit: () => {
            const {city} = formik.values;
            WeatherApi.getCityWeather(city)
                .then((res)=> {
                    if(res.statusText === 'OK') {
                        const newCardsArray = [...data.cards, city]
                        data.setCards(newCardsArray);
                        data.setShowForm(false);
                        data.setShowAddButton(true);
                    }
                })
                .catch(e => {
                data.setServerError(e.response?.data.message)
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
            {data.showForm &&
            <div className={styles.weatherFormBox}>
                <Formik>
                    <form className={styles.weatherForm} onSubmit={formik.handleSubmit}>
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
            </div>}
        </div>
        
    )
}

export default WeatherForm;