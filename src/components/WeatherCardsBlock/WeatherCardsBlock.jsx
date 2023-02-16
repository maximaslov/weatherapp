import React, { useContext, useEffect } from "react";
import { WeatherContext } from '../../Context';
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherCardsBlock = () => {
    const data = useContext(WeatherContext);

    return (
        <div>
            {/* <WeatherCard /> */}
            {data.weatherCards && data.weatherCards.map(e => {
                return <WeatherCard key={e.id} name={e.name} temp={e.main.temp} description={e.weather[0].description} />
            })}
        </div>
    )
}

export default WeatherCardsBlock;