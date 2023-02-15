import React, { useContext } from "react";
import { WeatherContext } from "../../../../Context";
import styles from './scaleSettings.module.css';

const ScaleSettings = () => {
  const data = useContext(WeatherContext);

  return (
    <nav className={styles.scaleSettings}>
      <button 
        disabled={data.setCurrrentScale === 'metric' && true}
        onClick={() => data.setCurrrentScale("metric")}
        >C
      </button>
      <button 
        disabled={data.setCurrrentScale === 'imperial' && true}
        onClick={() => data.setCurrrentScale('imperial')}
        >F
        </button>
    </nav>
  );
};

export default ScaleSettings;
