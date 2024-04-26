import React from 'react';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact us</h1>
      <p className={styles.contact__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam enim
        architecto omnis distinctio sapiente, dolorem ratione qui reiciendis
        incidunt necessitatibus, rerum praesentium ipsa vel!
      </p>
      <SocialMedia />
    </div>
  );
};

export default Contact;
