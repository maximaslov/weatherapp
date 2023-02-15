import React from "react";
import loadingGif from '../../img/loading.gif';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <figure>
            <img className={styles.loader} src={loadingGif} alt="loading..." />
        </figure>
    )
}

export default Loader;