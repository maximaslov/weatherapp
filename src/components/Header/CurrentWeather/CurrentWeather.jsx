import React from "react";
import styles from './CurrentWeather.module.css';
import CityWeather from './CityWeather/CityWeather'

const CurrentWeather = () => {
    return  (
        
        <div className={styles.currentWeather}>
            <CityWeather city={'Paris'}/>
            <CityWeather city={'Kiev'}/>
            <CityWeather city={'London'}/>
            <CityWeather city={'New York'}/>
        </div>
    )
}

export default CurrentWeather;