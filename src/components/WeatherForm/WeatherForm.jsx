import React, { useContext, useRef, useEffect, useState } from 'react';
import styles from './WeatherForm.module.css';
import { Formik, useFormik } from 'formik';
import { weatherFormSchemaEnglish, weatherFormSchemaUkraine } from './weatherFormSchema';
import { WeatherContext } from '../../Context';
import { WeatherApi } from '../../api';

const WeatherForm = () => {
    const data = useContext(WeatherContext);
    const [currentClassName, setCurrentClassName] = useState('weatherFormBox');
    const onClose = () => {
        data.setShowForm(false);
        data.setShowAddButton(true);
    }

    const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef, onClose]);

    const formik = useFormik({
        initialValues: {city: ""},
        onSubmit: () => {
            const {city} = formik.values;
            WeatherApi.getCityWeather(city)
                .then((res)=> {
                    if(res.statusText === 'OK') {
                        const newCradInfo = {   
                            name: city, 
                            id: Math.random(),
                        }
                        const newCardsArray = [...data.cards, newCradInfo]
                        data.setCards(newCardsArray);
                        data.setShowAddButton(true);
                        setCurrentClassName('hideWeatherFormBox');
                        setTimeout(() => {
                            data.setShowForm(false);
                            setCurrentClassName('weatherFormBox');
                        }, 700)
                        
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
        <div 
        ref={modalRef}
        className={data.showForm ? styles.weatherFormContaner : null}
        >
            {data.showForm &&
            <div className={styles[currentClassName]}>
                <Formik>
                    <form className={styles.weatherForm} onSubmit={formik.handleSubmit}>
                        <div>
                            <input
                                autoFocus = {true}
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
