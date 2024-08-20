import { useRouter } from 'next/router';
import styles from '../../../styles/EpisodeDetail.module.css'; // Lokasi dan nama file CSS
import { episodesData } from '../../anime/episode/dataepisode'; // Impor data episode dari file dataepisode.js
import { useState } from 'react';

// Fungsi untuk mendapatkan data episode berdasarkan nomor episode
function getEpisodeByNumber(episodeNumber) {
    return episodesData.find(episode => episode.number === parseInt(episodeNumber));
}

// Komponen utama untuk menampilkan detail episode
const EpisodeDetail = ({ episode }) => {
    const router = useRouter();
    const [selectedServer, setSelectedServer] = useState(episode.servers[0]);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    // Fungsi untuk menangani perubahan server yang dipilih
    const handleServerChange = (event) => {
        const selectedServerUrl = event.target.value;
        const server = episode.servers.find(s => s.url === selectedServerUrl);
        setSelectedServer(server);
    };

    // Fungsi untuk menangani perubahan input komentar
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    // Fungsi untuk menangani pengiriman komentar
    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment(''); // Reset input komentar
        }
    };

    return (
        <div className={styles.container}>
            {/* Pilihan Server/Kualitas */}
            <div className={styles.serverSelectWrapper}>
                <label htmlFor="serverSelect" className={styles.serverSelectLabel}>Pilih Server/Kualitas:</label>
                <select
                    id="serverSelect"
                    className={styles.serverSelect}
                    onChange={handleServerChange}
                    value={selectedServer.url}
                >
                    {episode.servers.map((server, index) => (
                        <option key={index} value={server.url}>
                            {server.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Video player embed */}
            <div className={styles.videoWrapper}>
                <iframe
                    src={selectedServer.url}
                    title={`Episode ${episode.number} - ${selectedServer.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoPlayer}
                ></iframe>
            </div>

            {/* Tombol navigasi untuk berpindah antar episode dan melihat informasi anime */}
            <div className={styles.buttonGroup}>
                <button 
                    className={styles.prevButton} 
                    onClick={() => router.push(`/anime/episode/${parseInt(episode.number) - 1}`)}
                    disabled={parseInt(episode.number) === 1}
                >
                    « Sebelumnya
                </button>
                <button 
                    className={styles.infoButton} 
                    onClick={() => router.push(`/anime/${episode.animeId}`)}
                >
                    Informasi Anime
                </button>
                <button 
                    className={styles.nextButton} 
                    onClick={() => router.push(`/anime/episode/${parseInt(episode.number) + 1}`)}
                >
                    Selanjutnya »
                </button>
            </div>

            {/* Detail informasi episode */}
            <div className={styles.details}>
                <h1 className={styles.title}>Episode {episode.number} - {episode.title}</h1>
                <p><strong>Description:</strong> {episode.description}</p>
                <p><strong>Date:</strong> {episode.airDate}</p>
            </div>

            {/* Bagian komentar */}
            <div className={styles.commentsSection}>
                <h2 className={styles.commentsTitle}>Komentar</h2>
                <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Tambahkan komentar..."
                        className={styles.commentInput}
                    />
                    <button type="submit" className={styles.commentSubmitButton}>Kirim</button>
                </form>
                <div className={styles.commentList}>
                    {comments.length > 0 ? (
                        comments.map((c, index) => (
                            <div key={index} className={styles.commentItem}>
                                {c}
                            </div>
                        ))
                    ) : (
                        <p>Tidak ada komentar.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Fungsi untuk mendapatkan data episode berdasarkan server-side rendering
export async function getServerSideProps(context) {
    const { episode } = context.params;

    // Mengambil data episode dari data lokal
    const episodeData = getEpisodeByNumber(episode);

    // Jika episode tidak ditemukan, kembalikan halaman 404
    if (!episodeData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            episode: episodeData,
        },
    };
}

export default EpisodeDetail;
