import React, { useContext } from 'react';
import styles from'./App.module.css';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WeatherForm from './components/WeatherForm/WeatherForm';
import { WeatherContext } from './Context';
import Result from './components/Result/Result';
import { useEffect } from 'react';

const App = () => {
  const data = useContext(WeatherContext);

  useEffect(()=> {
    styles.appWrapper = `background: url(${data.background})`;
  }, []);

  return (
      <div className={styles.appWrapper}>
        <img className={styles.backgroundImage} src={data.background} alt="" />
        <div className={styles.appWrapperContent}>
            <SettingsBlock />
            <WeatherForm />
            {data.shownResult && <Result />}
        </div>
      </div>
  );
}

export default App;
