import React, { useContext } from "react";
import { WeatherContext } from "../../../../Context";
import styles from './scaleSettings.module.css';

const ScaleSettings = () => {
  const data = useContext(WeatherContext);
  const setScale = (scale) => {
    data.setCurrrentScale(scale);
    data.scaleStorage.setItem('scale', scale);
  }

  return (
    <nav className={styles.scaleSettings}>
      <button 
        disabled={data.setCurrrentScale === 'metric' && true}
        onClick={() => setScale("metric")}
        >C
      </button>
      <button 
        disabled={data.setCurrrentScale === 'imperial' && true}
        onClick={() => setScale('imperial')}
        >F
        </button>
    </nav>
  );
};

export default ScaleSettings;
