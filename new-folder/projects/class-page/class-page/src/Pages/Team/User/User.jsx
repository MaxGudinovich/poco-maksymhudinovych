import React from 'react';
import { useParams } from 'react-router-dom';
import SocialMedia from '../../../Components/SocialMedia/SocialMedia';
import users from '../../../Data/data';
import styles from './User.module.scss';

const User = () => {
  const { user } = useParams();
  const person = users.find((person) => person.userName === user);
  console.log(person);

  return (
    <div className={styles.user}>
      <img
        src={`../${person.userPhoto}`}
        alt="user_photo"
        className={styles.user__photo}
      />
      <div className={styles.user__content}>
        <h2 className={styles.user__content_h2}>
          Name:
          <span className={styles.user__content_text}>{person.userName}</span>
        </h2>

        <h2 className={styles.user__content_h2}>
          Age:
          <span className={styles.user__content_text}>{person.userAge}</span>
        </h2>

        <h2 className={styles.user__content_h2}>
          Hobby:
          <span className={styles.user__content_text}>{person.userHobby}</span>
        </h2>

        <h2 className={styles.user__content_h2}>
          Description:
          <span className={styles.user__content_text}>
            {person.userDescription}
          </span>
        </h2>
        <SocialMedia />
      </div>
    </div>
  );
};

export default User;
