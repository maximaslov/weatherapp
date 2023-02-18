import React, { useContext, useEffect } from "react";
import { WeatherContext } from '../../Context';
import WeatherCard from './WeatherCard/WeatherCard';
import styles from './WeatherCardsBlock.module.css';

const WeatherCardsBlock = () => {
    const data = useContext(WeatherContext);

    return (
        <div className={styles.weatherCardContainer}>
            {/* <WeatherCard /> */}
            {data.cards && data.cards.map((e, i) => {
                return <WeatherCard key={i} city={e} lang={data.lang} scale={data.currentScale} />
            })}
        </div>
    )
}

export default WeatherCardsBlock;