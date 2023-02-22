import React, { useContext } from "react";
import styles from "./AddNewCardButton.module.css";
import { WeatherContext } from "../../Context";

const AddNewCardButton = () => {
  const data = useContext(WeatherContext);
  const onBtnClick = () => {
    data.setShowForm(true);
    data.setShowAddButton(false);
  };

  return (
    <div className={data.showAddButton ? styles.newCardBtnContainer : styles.hiddenNewCardBtnContainer}>
        <button onClick={onBtnClick} className={styles.newCardBtn}>
            <p>+</p>
        </button>
    </div>
  );
};

export default AddNewCardButton;
