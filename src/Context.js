import  React, { useState, createContext } from 'react';
import rainIcon from './img/rain.png';
import brokenCloudsIcon from './img/broken-clouds.png';
import clearSkyIcon from './img/clear-sky.png';
import fewCloudsIcon from './img/few-clouds.png';
import mistsIcon from './img/mist.png';
import snowIcon from './img/snow.png';
import thunderstormIcon from './img/thunderstorm.png';
import tornadoIcon from './img/tornado.png';

const standartBackground = 'https://wallpaperaccess.com/full/1540005.jpg';
const cloudsBackground = 'https://cs8.pikabu.ru/post_img/big/2017/07/02/9/1499010938150282077.jpg';
const rainBackground = 'https://hips.hearstapps.com/hmg-prod/images/its-raining-heavily-wearing-an-umbrella-during-the-royalty-free-image-1660153348.jpg';
const snowBackground = 'https://i2.wp.com/media.globalnews.ca/videostatic/news/kze2taggr4-jfc8p7qaxv/CP165276526.JPG?w=1040&quality=70&strip=all';
const sunBackground = 'https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?cs=srgb&dl=pexels-pixabay-301599.jpg&fm=jpg';
const thunderstormBackground = 'https://www.cdc.gov/nceh/features/lightning-safety/lightning-safety_456px.jpg?_=99662';
const fogBackground = 'https://cff2.earth.com/uploads/2018/11/13053559/what-is-mist.jpg';
const dustBackground = 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxODQ4ODA4NzQ3OTAyNDUw/a-dust-storm-roars-across-a-drought-stricken-field.jpg';
const ashBackground = 'https://cdn.hswstatic.com/gif/nanocrystals-1-original.jpg';
const tornadoBackground = 'https://interesnyefakty.org/wp-content/uploads/chto-takoe-tornado.jpg';
const squallBackground = 'https://i.pinimg.com/originals/a9/c5/30/a9c5302c7afd27f7ac3bb6c089024839.jpg';

export const WeatherContext = createContext();

const Context = (props) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [background, setBackground] = useState(standartBackground);
    const [shownResult, setShownResult] = useState(false);
    const [isEnglishLanguage, setEnglishLanguage] = useState(false);
    const [shownError, setShownError] = useState(false);
    const [serverError, setServerError] = useState('');
    const [description, setDescription] = useState('');
    const [currentScale, setCurrrentScale] = useState('metric');
    const [showLoader, setShowLoader] = useState(false);

    const lang = isEnglishLanguage ? 'en' : 'ua';

    const setCurrentBackground = (res) => {
        switch (res.data.weather[0].main) {
            case 'Clouds': setBackground(cloudsBackground);
            break;
            case 'Rain' || 'Drizzle': setBackground(rainBackground);
            break;
            case 'Snow': setBackground(snowBackground);
            break;
            case 'Clear': setBackground(sunBackground);
            break;
            case 'Thunderstorm': setBackground(thunderstormBackground);
            break;
            case 'Mist' || 'Smoke' || 'Haze': setBackground(fogBackground);
            break;
            case 'Sand' || 'Dust' || 'Haze': setBackground(dustBackground);
            break;
            case 'Ash' : setBackground(ashBackground);
            break;
            case 'Tornado' : setBackground(tornadoBackground);
            break;
            case 'Squall' : setBackground(squallBackground);
            break;
            default: setBackground(standartBackground)
        }
    }

    const setWeatherIcon = (res) => {
        switch (res.data.weather[0].main) {
            case 'Clouds': return brokenCloudsIcon;
            case 'Rain`' || 'Drizzle': return rainIcon;
            case 'Snow': return snowIcon;
            case 'Clear': return clearSkyIcon;
            case 'Thunderstorm': return thunderstormIcon;
            case 'Mist' || 'Smoke' || 'Haze': return mistsIcon;
            case 'Sand' || 'Dust' : return mistsIcon;
            case 'Ash' : return mistsIcon;
            case 'Tornado' : return tornadoIcon;
            case 'Squall' : return fewCloudsIcon;
            default: return mistsIcon;
        }
    }

    const value = {
        standartBackground,
        currentWeather,
        setCurrentWeather,
        background,
        setBackground,
        shownResult,
        setShownResult,
        isEnglishLanguage,
        setEnglishLanguage,
        shownError,
        setShownError,
        setCurrentBackground,
        serverError,
        setServerError,
        description,
        setDescription,
        setWeatherIcon,
        currentScale,
        setCurrrentScale,
        lang,
        showLoader,
        setShowLoader
    }
    

    return <WeatherContext.Provider value={value}>{props.children}</WeatherContext.Provider>
}

export default Context;