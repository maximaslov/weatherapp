import React, { useContext, useEffect } from "react";
import { WeatherContext } from '../../Context';
import AddNewCardButton from "../AddNewCardButton/AddNewCardButton";
import Loader from "../Loader/Loader";
import WeatherCard from './WeatherCard/WeatherCard';
import styles from './WeatherCardsBlock.module.css';

const WeatherCardsBlock = () => {
    const data = useContext(WeatherContext);

    return (
        <div className={styles.weatherCardContainer}>
            {
            data.cards && data.cards.map((e) => {
                return <WeatherCard key={e.id} id={e.id} city={e.name} lang={data.lang} scale={data.currentScale} />
            })
            }
            <AddNewCardButton />
        </div>
    )
}

export default WeatherCardsBlock;