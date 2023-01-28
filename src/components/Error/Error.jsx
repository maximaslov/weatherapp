import React, { useContext } from "react";
import styles from "./Error.module.css";
import { WeatherContext } from '../../Context';


const Error = ({errorMessage}) => {
    const data = useContext(WeatherContext);
    return (
        <div 
        className={styles.error}
        >
            <p>{errorMessage}</p>
        </div>
    )
}

export default Error;