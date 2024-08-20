import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Trending.module.css';

const trendingData = [
  { 
    id: 1, 
    title: 'Anime Title 1', 
    title: 'One Piece', 
    image: 'images/One Piece.jpg', 
    link: '/anime/1',
    synopsis: 'Gol D. Roger dikenal sebagai “Raja Bajak Laut,” makhluk terkuat dan paling terkenal yang pernah berlayar di Grand Line. Penangkapan dan eksekusi Roger oleh Pemerintah Dunia membawa perubahan di seluruh dunia. Kata-kata terakhirnya sebelum kematiannya mengungkapkan keberadaan harta terbesar di dunia, One Piece. Pengungkapan inilah yang menghasilkan Grand Age of Pirates, orang-orang yang bermimpi menemukan One Piece — yang menjanjikan kekayaan dan ketenaran dalam jumlah tak terbatas — dan sangat mungkin puncak kemuliaan serta gelar Raja Bajak Laut.Enter Monkey D. Luffy, bocah berusia 17 tahun yang menentang definisi standar Anda tentang bajak laut. Alih-alih persona populer dari desa bajak laut yang jahat, keras, dan tak bergigi untuk bersenang-senang, alasan Luffy untuk menjadi bajak laut adalah salah satu keajaiban: pikiran tentang petualangan yang mengasyikkan yang membawanya ke orang-orang yang membangkitkan minat dan akhirnya, harta yang dijanjikan. Mengikuti jejak pahlawan masa kecilnya, Luffy dan krunya melakukan perjalanan melintasi Grand Line, mengalami petualangan gila, mengungkap misteri gelap dan melawan musuh yang kuat, semua untuk mencapai kekayaan yang paling didambakan dari semua kekayaan — One Piece.',
    genre: ['Action', 'Drama', 'Fantasi', 'Komedi', 'Petualangan', 'Super Power']
  },
  { 
    id: 2, 
    title: 'Anime Title 2', 
    image: 'https://via.placeholder.com/300x300', 
    link: '/anime/2',
    synopsis: 'A brief synopsis of Anime Title 2.',
    genre: ['Fantasy', 'Comedy'], // Menggunakan array untuk genre
  },
  // Tambahkan lebih banyak item jika diperlukan
];

const getRandomColor = () => {
  const colors = ['#FF4D4D', '#FF9B4D', '#FFEC4D', '#4DFF57', '#4D9BFF', '#8C4DFF'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Trending = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour12: false }));
  const [searchQuery, setSearchQuery] = useState('');
  const [trendingItems, setTrendingItems] = useState(trendingData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour12: false }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for ${searchQuery}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = trendingItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Trending - Lexxyy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="/styles/trending.css" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="/" className={styles.logo}>
            <h1>Lexxyy</h1>
          </a>
          <nav className={styles.navbar}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/trending" className={`${styles.navLink} ${styles.active}`}>Trending</a>
            <a href="/schedule" className={styles.navLink}>Schedule</a>
            <div className={styles.searchContainer}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className={styles.searchButton} onClick={handleSearch}>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className={styles.currentTimeWIB}>{currentTime}</div>
          </nav>
        </header>

        <main className={styles.mainContent}>
          <h2 className={styles.pageTitle}>
            <i className="fas fa-fire emoji-icon"></i> Trending
          </h2>
          <div className={styles.categories}>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === 'Winter' ? styles.activeCategory : ''}`}
              onClick={() => handleCategoryClick('Winter')}
            >
              Winter
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === 'Spring' ? styles.activeCategory : ''}`}
              onClick={() => handleCategoryClick('Spring')}
            >
              Spring
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === 'Summer' ? styles.activeCategory : ''}`}
              onClick={() => handleCategoryClick('Summer')}
            >
              Summer
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === 'Fall' ? styles.activeCategory : ''}`}
              onClick={() => handleCategoryClick('Fall')}
            >
              Fall
            </button>
          </div>

          <div className={styles.trendingList}>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <a key={item.id} href={item.link} className={styles.trendingItemLink}>
                  <div className={styles.trendingItem}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.itemDetails}>
                      <div className={styles.itemTitle}>{item.title}</div>
                      <div className={styles.itemInfo}>
                        <p className={styles.itemSynopsis}>{item.synopsis}</p>
                        <div className={styles.itemGenres}>
                          {item.genre.map((g, index) => (
                            <a
                              key={index}
                              href={`/genre/${g}`}
                              className={styles.itemGenre}
                              style={{ backgroundColor: getRandomColor() }}
                            >
                              {g}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 Lexxyy. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Trending;
