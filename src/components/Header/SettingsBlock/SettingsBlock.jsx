import React from "react";
import СolorSchemeSettings from './СolorSchemeSettings/СolorSchemeSettings';
import LanguageSettings from './LanguageSettings/LanguageSettings';
import styles from './SettingsBlock.module.css';

const SettingsBlock = () => {
    return (
        <div className={styles.settings}>
            <LanguageSettings />
           <СolorSchemeSettings />
        </div>
      
    )
}

export default SettingsBlock;