import React from "react";
import LanguageSettings from './LanguageSettings/LanguageSettings';
import styles from './SettingsBlock.module.css';
import ScaleSettings from './ScaleSettings/ScaleSettings';

const SettingsBlock = () => {
    return (
        <div className={styles.settings}>
            <LanguageSettings />
            <ScaleSettings />
        </div>
      
    )
}

export default SettingsBlock;