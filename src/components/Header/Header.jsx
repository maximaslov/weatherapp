import React from "react";
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import styles from './Header.module.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import logo from '../../img/logo.png'

const Header = ({ isScrolled }) => {
    return (
        <header className={isScrolled ? styles.headerScrolled :styles.header}>
            <SettingsBlock/>
            <picture className={styles.logo}>
                <img src={logo} alt="weather app" />
            </picture>
            <CurrentWeather />
        </header>
    )
}

export default Header;