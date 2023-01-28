import  React, { useState, createContext } from 'react';
const standartBackground = 'https://wallpaperaccess.com/full/1540005.jpg';

export const WeatherContext = createContext();

const Context = (props) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [background, setBackground] = useState(standartBackground);
    const [shownResult, setShownResult] = useState(false);
    const [isEnglishLanguage, setEnglishLanguage] = useState(false);
    const [shownError, setShownError] = useState(false);
    const value = {
        background,
        setBackground,
        shownResult,
        setShownResult,
        isEnglishLanguage,
        setEnglishLanguage,
        shownError,
        setShownError,
    }
    

    return <WeatherContext.Provider value={value}>{props.children}</WeatherContext.Provider>
}

export default Context;