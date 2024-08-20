import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../styles/PopulaAnime.module.css';

const PopularAnimeSlider = ({ animeList }) => {
    if (!animeList || animeList.length === 0) {
        return <p>Tidak ada anime populer</p>;
    }

    // Function to determine border color based on index or anime type
    const getBorderColor = (index) => {
        const colors = ['blue', 'green', 'red', 'orange', 'purple', 'yellow'];
        return colors[index % colors.length];
    };

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
        >
            {animeList.map((anime, index) => (
                <SwiperSlide key={anime.mal_id}>
                    <div 
                        style={{ 
                            position: 'relative', 
                            border: `5px solid ${getBorderColor(index)}`,
                            borderRadius: '10px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                        }}
                        className="anime-slide"
                    >
                        <img 
                            src={anime.images?.jpg?.image_url || '/path/to/fallback-image.jpg'} 
                            alt={anime.title} 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                        <p style={{ 
                            position: 'absolute', 
                            top: '10px', 
                            right: '10px', 
                            color: 'white', 
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                            padding: '5px 10px', 
                            borderRadius: '5px',
                            fontWeight: 'bold'
                        }}>
                            {anime.type}
                        </p>
                        <p style={{ 
                            position: 'absolute', 
                            bottom: '10px', 
                            left: '10px', 
                            color: 'white', 
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            padding: '5px',
                            borderRadius: '3px'
                        }}>
                            {anime.title}
                        </p>
                        {/* Icon play */}
                        <i 
                            className="fas fa-play"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '40px',
                                opacity: '0',
                                transition: 'opacity 0.3s ease',
                            }}
                        ></i>
                    </div>
                </SwiperSlide>
            ))}

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </Swiper>
    );
};

export default PopularAnimeSlider;
