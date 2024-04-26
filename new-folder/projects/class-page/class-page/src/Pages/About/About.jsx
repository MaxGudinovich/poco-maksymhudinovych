import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <img src="logo.png" alt="about" className={styles.about__logo} />
      <p className={styles.about__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut
        tempora cum maxime atque blanditiis pariatur commodi, dignissimos
        perspiciatis vitae unde quia, in nisi, expedita quidem facilis tempore
        esse repudiandae doloribus exercitationem amet debitis. Sed quae
        asperiores sequi tempora! Suscipit sapiente quia impedit ducimus harum
        eveniet sit repellendus, aliquam iure? Ipsam, quidem sint! Eaque dolor
        eveniet consectetur inventore molestiae magni, nostrum nesciunt
        reprehenderit sed reiciendis voluptatibus vero voluptatum illum ducimus
        ipsum placeat, perspiciatis aliquam dolore nobis error. Pariatur nostrum
        dolores ad eaque laudantium cupiditate! Consectetur possimus esse dicta
        nihil, deserunt at! Commodi blanditiis numquam eius, quaerat aliquid
        consequuntur suscipit tenetur.
      </p>
    </div>
  );
};

export default About;
