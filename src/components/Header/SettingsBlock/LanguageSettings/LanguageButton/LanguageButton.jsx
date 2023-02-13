import React from 'react';
import styles from './languageButton.module.css';

const LanguageButton = ({onClick, btnStyle, language, isDisabled}) => {
    const style = `${styles.languageBtn} ${btnStyle}`;

    return (
            <button
                className={style}
                onClick={onClick}
                disabled={isDisabled}
            >
                {language}
            </button>
      
    )
}

export default LanguageButton;