import React, { useState } from 'react';
import styles from '../styles/Rekomendasi.module.css';

const Rekomendasi = () => {
    const genres = ['Action', 'Drama', 'Harem', 'Historical', 'Shounen'];

    const animeData = {
        Action: [
            { title: 'Tensei shitara Slime Datta Ken Season 1', image: '/images/anime-1.jpg', episode: 'Episode 24', status: 'Selesai', type: 'TV' },
            { title: 'Kimetsu no Yaiba: Katanakaji no Sato-hen', image: '/path-to-image2.jpg', episode: 'Episode ??', status: 'Segera Tayang', type: 'TV' },
            { title: 'Shingeki no Kyojin: The Final Season Kanketsu-hen', image: '/path-to-image3.jpg', episode: 'Episode ??', status: 'Sedang Tayang', type: 'TV' },
            { title: 'Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen', image: '/path-to-image4.jpg', episode: 'Episode ??', status: 'Sedang Tayang', type: 'MOVIE' },
            { title: 'Tensei Kizoku no Isekai Boukenroku', image: '/path-to-image5.jpg', episode: 'Episode ??', status: 'Segera Tayang', type: 'TV' },
        ],
        Drama: [
            // Data anime untuk genre Drama
        ],
        Harem: [
            // Data anime untuk genre Harem
        ],
        Historical: [
            // Data anime untuk genre Historical
        ],
        Shounen: [
            // Data anime untuk genre Shounen
        ],
    };

    const [selectedGenre, setSelectedGenre] = useState('Action');

    // Mengambil daftar anime berdasarkan genre yang dipilih
    const filteredAnimeList = animeData[selectedGenre];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Rekomendasi</h2>
            <div className={styles.genreTabs}>
                {genres.map((genre, idx) => (
                    <button
                        key={idx}
                        className={`${styles.genreTab} ${selectedGenre === genre ? styles.active : ''}`}
                        onClick={() => setSelectedGenre(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>
            <div className={styles.animeGrid}>
                {filteredAnimeList.map((anime, idx) => (
                    <div key={idx} className={styles.animeCard}>
                        <img src={anime.image} alt={anime.title} className={styles.animeImage} />
                        <div className={styles.episodeLabel}>{anime.episode}</div>
                        <div className={styles.statusLabel}>{anime.status}</div>
                        <div className={styles.typeLabel}>{anime.type}</div> {/* Tambahkan baris ini */}
                        <div className={styles.title}>{anime.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rekomendasi;
