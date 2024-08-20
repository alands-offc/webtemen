import { useRouter } from 'next/router';
import CommentSection from './CommentSection';
import styles from '../styles/AnimeDetail.module.css';

const AnimeDetail = ({ anime }) => {
    const router = useRouter();

    const handleEpisodeClick = (episodeNumber) => {
        router.push(`/anime/episode/${episodeNumber}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* Gambar anime dengan overlay */}
                <div className={styles.imageWrapper}>
                    <img src={anime.imageUrl} alt={anime.title} className={styles.image} />
                    <div className={styles.imageOverlay}>
                        <h1 className={styles.title}>{anime.title}</h1>
                        <div className={styles.genreLinks}>
                            {anime.genre.map((genre, index) => (
                                <div key={index} className={styles.genre}>
                                    {genre}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.statusRelease}>
                        <div>Status: {anime.status}</div>
                        <div>Release Date: {anime.releaseDate}</div>
                    </div>
                </div>
                
                {/* Deskripsi anime dengan latar belakang merah */}
                <div className={styles.descriptionWrapper}>
                    <h2 className={styles.sectionTitle}>Sinopsis</h2>
                    <p className={styles.description}>{anime.description}</p>
                </div>

                {/* Info lebih lanjut */}
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <span>Status:</span>
                        <span>{anime.status}</span>
                    </div>
                    <div className={styles.detail}>
                        <span>Release Date:</span>
                        <span>{anime.releaseDate}</span>
                    </div>
                </div>
            </div>

            {/* Cast section */}
            <div className={styles.castSection}>
                <h2 className={styles.sectionTitle}>Cast</h2>
                <div className={styles.castList}>
                    {anime.cast && Array.isArray(anime.cast) && anime.cast.length > 0 ? (
                        anime.cast.map((actor) => (
                            <div key={actor.name} className={styles.castItem}>
                                <img src={actor.image} alt={actor.name} className={styles.castImage} />
                                <span className={styles.actorName}>{actor.name}</span>
                                <span className={styles.characterName}>{actor.character}</span>
                            </div>
                        ))
                    ) : (
                        <p>No cast information available.</p>
                    )}
                </div>
            </div>

            {/* Trailer section */}
            <div className={styles.trailerSection}>
                <div className={styles.trailer}>
                    <iframe
                        src={`https://www.youtube.com/embed/${anime.trailerId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Episodes section */}
            <div className={styles.episodesSection}>
                <h2 className={styles.sectionTitle}>Episodes</h2>
                <div className={styles.episodesList}>
                    {anime.episodes.map((episode) => (
                        <div
                            key={episode.number}
                            className={styles.episodeItem}
                            onClick={() => handleEpisodeClick(episode.number)}
                        >
                            <span className={styles.episodeTitle}>Episode {episode.number}</span>
                            {/* Tambahkan gambar episode jika ada */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Comment section */}
            <div className={styles.commentSection}>
                <h2 className={styles.sectionTitle}>Comments</h2>
                <CommentSection />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;

    // Gantikan ini dengan panggilan API atau fetch ke data anime yang sesuai
    const anime = await fetchAnimeById(id); // Fungsi fetchAnimeById disesuaikan dengan API Anda.

    // Jika anime tidak ditemukan, kembalikan halaman 404
    if (!anime) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            anime,
        },
    };
}

export default AnimeDetail;
