import React, { useContext } from 'react';
import styles from'./App.module.css';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WeatherForm from './components/WeatherForm/WeatherForm';
import { WeatherContext } from './Context';
import Result from './components/Result/Result';
import { useEffect } from 'react';
import { WeatherApi } from './api';

const App = () => {
  const data = useContext(WeatherContext);

  useEffect(()=> {
    !data.currentWeather &&
    navigator.geolocation.getCurrentPosition(function(position) {
      WeatherApi.getLocationWeather(position.coords)
        .then((res)=> {
          data.setCurrentBackground(res)
          data.setCurrentWeather(res.data)
          data.setDescription(data.currentWeather.weather[0].description)
        })
        .catch(e => {
          data.setServerError(e.message)
        });
    });
    
  }, [data.background, data.serverError, data.currentWeather]);

  return (
      <div className={styles.appWrapper}>
        <img className={styles.backgroundImage} src={data.background} alt="" />
        {data.currentWeather && 
          <div>
            <p>{data.currentWeather.name}</p>
            <p>{data.currentWeather.main.temp}°C</p>
            <p>{data.currentWeather.main.feels_like}</p>
            <p>{data.currentWeather.weather[0].description}</p>
          </div>}
        <div className={styles.appWrapperContent}>
            <SettingsBlock />
            <WeatherForm />
            {data.shownResult && <Result />}
        </div>
      </div>
  );
}

export default App;
