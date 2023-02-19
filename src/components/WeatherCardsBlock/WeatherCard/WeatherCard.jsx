import React, { useEffect, useContext, useState } from "react";
import { WeatherApi } from "../../../api";
import { WeatherContext } from '../../../Context';
import Loader from '../../Loader/Loader';
import styles from "./WeatherCard.module.css";

const WeatherCard = ({city, lang, scale}) => {
  const data = useContext(WeatherContext);
  const [currentWeather, setCurrentWeather] = useState (null);
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState(null);

  const removeCard = () => {
    const items = JSON.parse(data.cardsStorage.getItem('storageCardsArray'));
    const newItems  =  items.filter(e => e !== city);
    data.cardsStorage.setItem('storageCardsArray', JSON.stringify(newItems));
    data.setCards(JSON.parse(data.cardsStorage.getItem('storageCardsArray')));
  }

  const getCurrentWeather = () => {
    data.setShowLoader(true)
    WeatherApi.getCityWeather(city, lang, scale)
        .then((res) => {
            setCurrentWeather(res.data)
            setCurrentWeatherIcon(data.setWeatherIcon(res));
            
        })
        .then(() => data.setShowLoader(false))
     .catch(e => { 
        data.setServerError(e.response?.data.message);
    });
}

  useEffect(() => {
    getCurrentWeather()
    const newStorageArr = JSON.stringify(data.cards);
    data.cardsStorage.setItem('storageCardsArray', newStorageArr);
    console.log(data.cardsStorage.getItem('storageCardsArray'))
    // data.cardsStorage.clear();
  }, [scale, lang, data.card, data.cardsData]);

  return (
    <>
      <div className={styles.weatherCardContainer}>
        {!currentWeather || data.showLoader ? (
          <Loader />
        ) : (
          
          <div className={styles.weatherCard}>
             
            <p>{currentWeather.name}</p>
            <p>
              {currentWeather.main.temp < 0
                ? `+${Math.round(currentWeather.main.temp)} °${data.scale}`
                : `${Math.round(currentWeather.main.temp)} °${data.scale}`}
            </p>
            <img src={currentWeatherIcon} alt="" />
            <p>{currentWeather.weather[0].description}</p>
            <button onClick={removeCard}>remove</button>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
