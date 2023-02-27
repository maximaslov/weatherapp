import React, { useContext } from "react";
import styles from './CurrentWeather.module.css';
import CityWeather from './CityWeather/CityWeather'
import { WeatherContext } from '../../../Context';



    
const CurrentWeather = () => {
    const data = useContext(WeatherContext);
    return  (
        <div className={styles.currentWeather}>
            <CityWeather city={data.isEnglishLanguage ? 'Paris' : "Париж"}/>
            <CityWeather city={data.isEnglishLanguage ? 'Kiev' : "Київ"}/>
            <CityWeather city={data.isEnglishLanguage ? 'London' : "Лондон"}/>
            <CityWeather city={data.isEnglishLanguage ? 'New York' : "Ню Йорк"}/>
            <CityWeather city={data.isEnglishLanguage ? 'Berlin' : "Берлин"}/>
        </div>
    )
}

export default CurrentWeather;