import React, { useEffect, useState, useContext } from "react";
import Loader from '../../../Loader/Loader';
import styles from './CityWeather.module.css';
import { WeatherApi } from '../../../../api';
import { WeatherContext } from '../../../../Context';


const CityWeather = ({city}) => {
    const data = useContext(WeatherContext);
    const [currentWeather, setCurrentWeather] = useState(null);

    const getCurrentWeather = () => {
        WeatherApi.getCityWeather(city).then((res) => setCurrentWeather(res.data))
         .catch(e => { 
            data.setServerError(e.response.data.message);
        });
    }

    useEffect(() => {
        getCurrentWeather();
    },[])

    return  (
        <>
            {!currentWeather ? <Loader/> : 
                <div className={styles.cityWeather}>
                    <p>{currentWeather.name}</p>
                    <p>{currentWeather.main.temp}</p>
                    <p>{currentWeather.weather[0].description}</p>
                </div>
            }
        </>
    )
}

export default CityWeather;