import React, { useContext } from "react";
import styles from "./Error.module.css";

const Error = ({errorMessage}) => {
    return (
        <div 
        className={styles.error}
        >
            <p>{errorMessage}</p>
        </div>
    )
}

export default Error;