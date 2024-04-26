import { useState, useRef, useEffect } from 'react';
import users from '../../Data/data.js';

import PhotoCard from '../../Components/Cards/PhotoCard';
import ModalCard from '../../Components/Cards/ModalCard.jsx';
import styles from './Home.module.scss';

const Home = () => {
  const [activePerson, setActivePerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleCardClick = (person) => {
    setActivePerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setActivePerson(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.home}>
      <h1>Our people</h1>
      <p className={styles.home__text}>
        This is our team, a lot of smiling happy people who work hard to empower
        your teams.
      </p>
      <div className={styles.home__photos}>
        {users.map((person) => (
          <PhotoCard
            key={person.id}
            className={styles.home__photos_item}
            src={person.userPhoto}
            onClick={() => handleCardClick(person)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div ref={modalRef}>
          <ModalCard person={activePerson} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default Home;
