import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' }));
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <header className={styles.header}>
      {/* Menggunakan teks sebagai logo */}
      <title>Home - Lexxyy | Nonton Anime Subtitile Indonesia</title>
      <div className={styles.logoText}>Lexxyy</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/trending">Trending</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/profile">Profile</Link> {/* Link baru ke halaman Profil */}
      </nav>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search anime..." className={styles.searchInput} />
        <button className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className={styles.clock}>
        {time} WIB
      </div>
    </header>
  );
};

export default Header;
