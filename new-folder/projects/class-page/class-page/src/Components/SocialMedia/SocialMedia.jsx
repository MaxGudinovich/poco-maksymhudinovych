import React from 'react';
import styles from './SocialMedia.module.scss';

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <img
        src="../icons8-facebook.svg"
        alt="facebook"
        className={styles.social__icon}
      />
      <img
        src="../icons8-github.svg"
        alt="github"
        className={styles.social__icon}
      />
      <img
        src="../icons8-instagram.svg"
        alt="instagram"
        className={styles.social__icon}
      />
    </div>
  );
};

export default SocialMedia;
