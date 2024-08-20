import React from 'react';
import Image from 'next/image';
import styles from '../styles/RilisTerbaru.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Tambahkan ini

const RilisTerbaru = () => {
    const animeList = [
        {
            title: "Ranma ½",
            type: "TV",
            episodes: "161 Episode",
            status: "Selesai",
            image: "/images/anime-1.jpg"
        },
        {
            title: "Hunter x Hunter",
            type: "Movie",
            episodes: "Movie",
            status: "Selesai",
            image: "/images/anime-2.png"
        },
        // Tambahkan item lainnya sesuai kebutuhan
    ];

    return (
        <div className={styles.rilisTerbaruContainer}>
            <h2 className={styles.title}>Baru Ditambah & Diperbarui</h2>
            <div className={styles.animeList}>
                {animeList.map((anime, index) => (
                    <div key={index} className={styles.animeCard}>
                        <div className={styles.imageWrapper}>
                            <Image src={anime.image} alt={anime.title} layout="fill" objectFit="cover" />
                            <div className={styles.playIcon}>
                                <i className="fas fa-play"></i>
                            </div>
                            <div className={styles.typeLabel}>{anime.type}</div>
                            <div className={styles.episodeLabel}>{anime.episodes}</div>
                            <div className={styles.statusLabel}>{anime.status}</div>
                        </div>
                        <div className={styles.animeInfo}>
                            <h3>{anime.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RilisTerbaru;
