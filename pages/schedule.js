import React, { useEffect, useState } from 'react';
import styles from '../styles/Schedule.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Schedule = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [selectedDay, setSelectedDay] = useState(new Date().toLocaleDateString('id-ID', { weekday: 'long' }));

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours12 = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
      const hours24 = now.toLocaleTimeString('id-ID', { hour12: false });
      setCurrentTime(`${hours12}/${hours24}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const today = new Date();
  const dateString = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const daysOfWeek = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];

  const scheduleData = {
    'Senin': [
      {
        time: '20:30',
        title: 'MAYONAKA PUNCH',
        episode: 'Episode 6',
        image: '/images/anime-1.jpg',
        url: '/anime/mayonaka-punch',
      },
    ],
    'Selasa': [
      {
        time: '21:00',
        title: 'Sakura Quest',
        episode: 'Episode 7',
        image: '/images/anime-2.jpg',
        url: '/anime/sakura-quest',
      },
    ],
    'Rabu': [
      {
        time: '19:00',
        title: 'Naruto Shippuden',
        episode: 'Episode 300',
        image: '/images/anime-3.jpg',
        url: '/anime/naruto-shippuden',
      },
    ],
    'Kamis': [
      {
        time: '22:00',
        title: 'Attack on Titan',
        episode: 'Episode 12',
        image: '/images/anime-4.jpg',
        url: '/anime/attack-on-titan',
      },
    ],
    'Jumat': [
      {
        time: '20:00',
        title: 'One Piece',
        episode: 'Episode 800',
        image: '/images/anime-5.jpg',
        url: '/anime/one-piece',
      },
    ],
    'Sabtu': [
      {
        time: '18:00',
        title: 'Dragon Ball Super',
        episode: 'Episode 130',
        image: '/images/anime-6.jpg',
        url: '/anime/dragon-ball-super',
      },
    ],
    'Minggu': [
      {
        time: '17:00',
        title: 'My Hero Academia',
        episode: 'Episode 25',
        image: '/images/anime-7.jpg',
        url: '/anime/my-hero-academia',
      },
    ],
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    console.log(`Anda memilih hari: ${day}`);
  };

  const handleAnimeClick = (url) => {
    console.log(`Anda mengklik anime dengan URL: ${url}`);
    window.location.href = url;
  };

  return (
    <div className={styles.scheduleContainer}>
      <header className={styles.header}>
      <title>Schedule - Lexxyy</title>
        <div className={styles.logo}>
          <h1>Lexxyy</h1>
        </div>
        <div className={styles.headerRight}>
          <nav className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/trending">Trending</a>
            <a href="/schedule" className={styles.active}>Schedule</a>
          </nav>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search anime..." className={styles.searchInput} />
            <button className={styles.searchButton}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className={styles.currentTimeWIB}>
              {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} WIB
            </div>
          </div>
        </div>
      </header>
      <div className={styles.timeContainer}>
        <div className={styles.currentDayTime}>
          {daysOfWeek[today.getDay()]} · {currentTime} WIB
        </div>
      </div>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <button
            key={index}
            className={day === selectedDay ? styles.activeDay : styles.day}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <h2 className={styles.scheduleTitle}>Jadwal Hari Ini - {dateString}</h2>
      <div className={styles.currentShow}>
        {scheduleData[selectedDay] ? (
          scheduleData[selectedDay].map((show, index) => (
            <div key={index} className={styles.showItem} onClick={() => handleAnimeClick(show.url)}>
              <img src={show.image} alt={show.title} className={styles.showImage} />
              <div>
                <h3>{show.title}</h3>
                <p>{show.episode}</p>
                <p>{show.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada jadwal untuk hari ini.</p>
        )}
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 Lexxyy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Schedule;
