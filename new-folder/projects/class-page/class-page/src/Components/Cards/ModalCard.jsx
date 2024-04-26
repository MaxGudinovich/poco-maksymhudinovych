import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ModalCard.module.scss';

const ModalCard = ({ person }) => {
  const navigate = useNavigate();

  const showPerson = (person) => {
    return () => {
      navigate(`team/${person}`);
    };
  };

  return (
    <div className={styles.modal} onClick={showPerson(person.userName)}>
      <img
        src={`${person.userPhoto}`}
        alt="person_photo"
        className={styles.modal__photo}
      />
      <div className={styles.modal__content}>
        <h2 className={styles.modal__content_h2}>
          Name:
          <span className={styles.modal__content_text}>{person.userName}</span>
        </h2>

        <h2 className={styles.modal__content_h2}>
          Age:
          <span className={styles.modal__content_text}>{person.userAge}</span>
        </h2>

        <h2 className={styles.modal__content_h2}>
          Hobby:
          <span className={styles.modal__content_text}>{person.userHobby}</span>
        </h2>

        <h2 className={styles.modal__content_h2}>
          Description:
          <span className={styles.modal__content_text}>
            {person.userDescription}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ModalCard;
