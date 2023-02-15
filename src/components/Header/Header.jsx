import React from "react";
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import styles from './Header.module.css';
import CurrentWeather from './CurrentWeather/CurrentWeather'

const Header = () => {
    return (
        <header className={styles.header}>
            <SettingsBlock/>
            <div className={styles.logo}>LOGO</div>
            <CurrentWeather />
        </header>
    )
}

export default Header;