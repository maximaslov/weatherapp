// import React, { useEffect, useContext } from "react";
// import { WeatherContext } from '../../../Context';
// import Loader from '../../Loader/Loader';
// import styles from "./WeatherCard.module.css";

// const WeatherCard = () => {
//   const data = useContext(WeatherContext);

//   useEffect(() => {
//     data.getWeatherByLocation();
//   }, [data.currentScale, data.isEnglishLanguage]);

//   return (
//     <>
//       <div className={styles.weatherCardContainer}>
//         {!data.currentWeather || data.showLoader ? (
//           <Loader />
//         ) : (
//           <div className={styles.weatherCard}>
//             <p>{data.currentWeather.name}</p>
//             <p>
//               {data.currentWeather.main.temp < 0
//                 ? `+${Math.round(data.currentWeather.main.temp)} °${data.scale}`
//                 : `${Math.round(data.currentWeather.main.temp)} °${data.scale}`}
//             </p>
//             {/* <p>{data.currentWeather.main.feels_like}</p> */}
//             <p>{data.currentWeather.weather[0].description}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default WeatherCard;
