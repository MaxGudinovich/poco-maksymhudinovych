import React from 'react';
import styles from './PrimaryCard.module.scss';

const PrimaryCard = ({ photo, name, description, hobby, age, onClick }) => {
  return (
    <div className={styles.primaryCard} onClick={onClick}>
      <img src={photo} alt="person" className={styles.primaryCard__photo} />
      <div className={styles.primaryCard__content}>
        <h2 className={styles.primaryCard__content_h2}>
          Name:<span className={styles.primaryCard__content_text}>{name}</span>
        </h2>

        <h2 className={styles.primaryCard__content_h2}>
          Age:<span className={styles.primaryCard__content_text}>{age}</span>
        </h2>

        <h2 className={styles.primaryCard__content_h2}>
          Hobby:
          <span className={styles.primaryCard__content_text}>{hobby}</span>
        </h2>

        <h2 className={styles.primaryCard__content_h2}>
          Description:
          <span className={styles.primaryCard__content_text}>
            {description}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default PrimaryCard;
