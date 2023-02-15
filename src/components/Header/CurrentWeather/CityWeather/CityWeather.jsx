import React, { useEffect, useState, useContext } from "react";
import Loader from '../../../Loader/Loader';
import styles from './CityWeather.module.css';
import { WeatherApi } from '../../../../api';
import { WeatherContext } from '../../../../Context';


const CityWeather = ({city}) => {
    const data = useContext(WeatherContext);
    const scale = data.currentScale === 'metric' ? 'C' : 'F';
    const [currentWeather, setCurrentWeather] = useState(null);
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState('');

    const getCurrentWeather = () => {
        data.setShowLoader(true)
        WeatherApi.getCityWeather(city, data.lang, data.currentScale)
            .then((res) => {
                setCurrentWeather(res.data)
                setCurrentWeatherIcon(data.setWeatherIcon(res));
            })
            .then(() => data.setShowLoader(false))
         .catch(e => { 
            console.log(e)
            data.setServerError(e.response?.data.message);
        });
    }

    useEffect(() => { 
        getCurrentWeather();
    },[data.isEnglishLanguage, data.currentScale]);

    return  (
        <>
            {!currentWeather || data.showLoader ? <Loader/> : 
                <div className={styles.cityWeather}>
                    <div className={styles.firstDescription}>
                        <p className={styles.cityName}>{currentWeather.name}</p>
                        <p className={styles.temperature}>{currentWeather.main.temp > 0
                            ? `+${Math.round(currentWeather.main.temp)} °${scale}` 
                            : `${Math.round(currentWeather.main.temp)} °${scale}`}</p>
                    </div>
                    <div className={styles.secondDescription}>
                        <figure>
                            <img src={currentWeatherIcon} alt="weather" />
                        </figure>
                        <p className={styles.descriptionText}>{currentWeather.weather[0].description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default CityWeather;