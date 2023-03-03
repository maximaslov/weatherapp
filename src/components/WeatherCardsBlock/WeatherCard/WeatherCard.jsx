import React, { useEffect, useContext, useState } from "react";
import { WeatherApi } from "../../../api";
import { WeatherContext } from "../../../Context";
import Loader from "../../Loader/Loader";
import styles from "./WeatherCard.module.css";
import Snowfall from "react-snowfall";

const WeatherCard = ({ city, lang, scale, id }) => {
  const data = useContext(WeatherContext);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState(null);
  const [showThisCard, setShowThisCard] = useState(true);
  const [currentClassname, setCurrentClassName] = useState('weatherCardContainer');

  const removeCard = () => {
    // const items = JSON.parse(data.cardsStorage.getItem("storageCardsArray"));
    // const items = data.cards;
    const newItems = data.cards.filter(e => e.id !== id);
    setShowThisCard(false);
    setTimeout(() => {
      data.cardsStorage.setItem("storageCardsArray", JSON.stringify(newItems));
      data.setCards(JSON.parse(data.cardsStorage.getItem("storageCardsArray")));
  }, 700);  
  };

  const getCurrentWeather = () => {
    data.setShowLoader(true);
    WeatherApi.getCityWeather(city, lang, scale)
      .then((res) => {
        setCurrentWeather(res.data);
        setCurrentWeatherIcon(data.setWeatherIcon(res));
        setCurrentClassName(data.setCurrentClass(res));
      })
      .then(() => {
        data.setShowLoader(false);
      })
      .catch((e) => {
        data.setServerError(e.response?.data.message);
      });
  };

  useEffect(() => {
    getCurrentWeather();
    const newStorageArr = JSON.stringify(data.cards);
    data.cardsStorage.setItem("storageCardsArray", newStorageArr);
    // data.cardsStorage.clear();
    console.log(data.cardsStorage);
  }, [
    scale,
    lang,
    // data.cardsData
  ]);

  return (
    <>
      <div className={showThisCard ? styles[currentClassname] : styles.remove}>
      {currentClassname === 'snowContainer' && <Snowfall />}
        {!currentWeather || data.showLoader ? (
          <Loader />
        ) : (
          
          <div className={styles.weatherCard}>  
            <p>{currentWeather.name}</p>
            <p>
              {currentWeather.main.temp > 0
                ? `+${Math.round(currentWeather.main.temp)} °${data.scale}`
                : `${Math.round(currentWeather.main.temp)} °${data.scale}`}
            </p>
            <img src={currentWeatherIcon} alt="weather" />
            <p>{currentWeather.weather[0].description}</p>
            <button className={styles.removeBtn} onClick={removeCard}>
              remove
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
