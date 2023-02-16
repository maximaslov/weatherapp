import React, { useEffect, useContext } from "react";
import { WeatherContext } from '../../../Context';
import Loader from '../../Loader/Loader';
import styles from "./WeatherCard.module.css";

const WeatherCard = ({name, temp, description}) => {
  const data = useContext(WeatherContext);

  return (
    <>
      <div className={styles.weatherCardContainer}>
        {!data.currentWeather || data.showLoader ? (
          <Loader />
        ) : (
          <div className={styles.weatherCard}>
            <p>{name}</p>
            <p>
              {temp < 0
                ? `+${Math.round(temp)} °${data.scale}`
                : `${Math.round(temp)} °${data.scale}`}
            </p>
            {/* <p>{data.currentWeather.main.feels_like}</p> */}
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
