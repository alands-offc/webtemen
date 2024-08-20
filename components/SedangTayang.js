import React from 'react';
import styles from '../styles/SedangTayang.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';

const SedangTayang = () => {
    const router = useRouter();

    const animeList = [
        {   
            id: '1',
            title: 'Tasueketsu',
            episode: 5,
            image: '/images/anime-1.jpg',
            type: 'TV',
        },
        {
            id: '2', // Pastikan semua anime memiliki ID
            title: 'Isekai Shikkaku',
            episode: 6,
            image: '/images/anime-1.png',
            type: 'OVA',
        },
        {
            id: '3',
            title: 'Grendizer U',
            episode: 6,
            image: '/images/anime-3.jpg',
            type: 'Movie',
        },
        {
            id: '4',
            title: 'Katsute Mahou Shoujo to Aku wa Tektai shiteta',
            episode: 6,
            image: '/path-to-image4.jpg',
            type: 'TV',
        },
        {
            id: '5',
            title: 'Egumi Legacy',
            episode: 6,
            image: '/path-to-image5.jpg',
            type: 'TV',
        },
        {
            id: '6',
            title: 'Spirit Sword Sovereign Season 4',
            episode: 413,
            image: '/path-to-image6.jpg',
            type: 'TV',
        },
        {
            id: '7',
            title: '100,000 Years of Refining Qi',
            episode: 157,
            image: '/path-to-image7.jpg',
            type: 'TV',
        },
        {
            id: '8',
            title: 'Ookami to Koushinryou',
            episode: 19,
            image: '/path-to-image8.jpg',
            type: 'TV',
        },
        {
            id: '9',
            title: 'The King\'s Avatar Season 2',
            episode: 12,
            image: '/path-to-image9.jpg',
            type: 'TV',
        },
        {
            id: '10',
            title: 'Shinmai Ossan Boukensha, Saikyou Party',
            episode: 6,
            image: '/path-to-image10.jpg',
            type: 'TV',
        },
    ];

    const handlePlayClick = (id) => {
        router.push(`/anime/${id}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Sedang Tayang</h2>
            {animeList.map((anime, idx) => (
                <div key={idx} className={styles.animeCard}>
                    <div className={styles.labelType}>{anime.type}</div>
                    <img src={anime.image} alt={anime.title} className={styles.animeImage} />
                    <FaPlayCircle 
                        className={styles.playIcon} 
                        onClick={() => handlePlayClick(anime.id)} // Arahkan ke halaman detail anime
                    /> 
                    <div className={styles.episodeLabel}>{anime.episode} Episode</div>
                    <div className={styles.title}>{anime.title}</div>
                </div>
            ))}
        </div>
    );
};

export default SedangTayang;
