import React, { useContext } from "react";
import { WeatherContext } from "../../../../Context";
import styles from "./ScaleSettings.module.css";

const ScaleSettings = () => {
  const data = useContext(WeatherContext);

  const setScale = () => {
    const scale = data.currentScale === "metric" ? "imperial" : "metric";
    data.setCurrrentScale(scale);
    data.scaleStorage.setItem("scale", scale);
  };

  const setButtonValue = () => {
    if (data.currentScale === "metric") {
      return data.isEnglishLanguage ? "Fahrenheit" : "Шкала Фаренгейта";
    } else {
      return data.isEnglishLanguage ? "Celsius" : "Шкала Цельсія";
    }
  };

  const value = setButtonValue();

  return (
    <nav className={styles.scaleSettings}>
      <button className={styles.scaleBtn} onClick={() => setScale()}>
        {value}
      </button>
    </nav>
  );
};

export default ScaleSettings;
