import React from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../Data/data.js';
import styles from './Team.module.scss';
import PrimaryCard from '../../Components/Cards/PrimaryCard';

const Team = () => {
  const navigate = useNavigate();
  const showPerson = (person) => {
    return () => {
      navigate(`${person}`);
    };
  };

  return (
    <div className={styles.team}>
      {users.map((person) => (
        <PrimaryCard
          key={person.id}
          photo={person.userPhoto}
          name={person.userName}
          description={person.userDescription}
          hobby={person.userHobby}
          age={person.userAge}
          onClick={showPerson(person.userName)}
        />
      ))}
    </div>
  );
};

export default Team;
