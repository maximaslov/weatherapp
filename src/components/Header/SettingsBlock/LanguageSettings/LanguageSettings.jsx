import React, { useContext } from 'react';
import styles from './languageSettings.module.css';
import { WeatherContext } from '../../../../Context';
import LanguageButton from './LanguageButton/LanguageButton';

const LanguageSettings = () => {
    const data = useContext(WeatherContext);
    

    const onEngBtnClick = () => {
        data.setEnglishLanguage(true)
        data.languageStorage.setItem('lang', 'en')
    }

    const onUaBtnClick = () => {
        data.setEnglishLanguage(false)
        data.languageStorage.setItem('lang', 'uk')
    }

    return (
        <nav className={styles.languageSettingsContainer}>
            <LanguageButton 
                language={!data.isEnglishLanguage && 'ENG'}
                onClick={onEngBtnClick}
                isDisabled={data.isEnglishLanguage && true}
                btnStyle={styles.englishBtn}
            />
            <LanguageButton 
                language={data.isEnglishLanguage && 'UA'}
                onClick={onUaBtnClick}
                isDisabled={!data.isEnglishLanguage && true}
                btnStyle={styles.ukrainianBtn}
            />
        </nav>
    )
}

export default LanguageSettings;