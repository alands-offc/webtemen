import { useRouter } from 'next/router';

function AnimeCard({ popularAnimeSlider, sedangTayang, rekomendasi }) {
    const router = useRouter();

    const handleCardClick = (id) => {
      console.log("Anime ID:", id);  // Debugging log
      router.push(`/anime/${id}`);
  };
  
    return (
        <div>
            <h2>Popular Anime</h2>
            <div className="anime-list">
                {popularAnimeSlider.map(anime => (
                    <div key={anime.id} className="anime-card" onClick={() => handleCardClick(anime.id)}>
                        <img src={anime.imageUrl} alt={anime.title} />
                        <h3>{anime.title}</h3>
                        <p>{anime.description}</p>
                    </div>
                ))}
            </div>

            <h2>Sedang Tayang</h2>
            <div className="anime-list">
                {sedangTayang.map(anime => (
                    <div key={anime.id} className="anime-card" onClick={() => handleCardClick(anime.id)}>
                        <img src={anime.imageUrl} alt={anime.title} />
                        <h3>{anime.title}</h3>
                        <p>{anime.description}</p>
                    </div>
                ))}
            </div>

            <h2>Rekomendasi Anime</h2>
            <div className="anime-list">
                {rekomendasi.map(anime => (
                    <div key={anime.id} className="anime-card" onClick={() => handleCardClick(anime.id)}>
                        <img src={anime.imageUrl} alt={anime.title} />
                        <h3>{anime.title}</h3>
                        <p>{anime.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimeCard;
