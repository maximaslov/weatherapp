import React, { useContext } from 'react';
import styles from'./App.module.css';
import WeatherForm from './components/WeatherForm/WeatherForm';
import { WeatherContext } from './Context';
import Result from './components/Result/Result';
import { useEffect } from 'react';
import { WeatherApi } from './api';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import WeatherCardsBlock from './components/WeatherCardsBlock/WeatherCardsBlock';
import Loader from './components/Loader/Loader';
import AddNewCardButton from './components/AddNewCardButton/AddNewCardButton';

const App = () => {
  const data = useContext(WeatherContext);

  useEffect(()=> {
    // data.getWeatherByLocation();
  }, []);

  return (
      <div className={styles.appWrapper}>
        <img className={styles.backgroundImage} src={data.background} alt="" />
        <div className={styles.appWrapperContent}>
            <Header />
            <main>
              {data.serverError && <Error errorMessage={data.serverError}/>}
              <AddNewCardButton />
              <WeatherForm />
              <WeatherCardsBlock />
              {data.shownResult && <Result />}
            </main>
            
        </div>
      </div>
  );
}

export default App;
