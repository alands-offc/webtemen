import Header from '../components/Header';
import Footer from '../components/Footer';
import PopularAnimeSlider from '../components/PopularAnimeSlider';
import RilisTerbaru from '../components/RilisTerbaru';
import SedangTayang from '../components/SedangTayang';
import Rekomendasi from '../components/Rekomendasi';

// Import fungsi untuk mengambil data dari API
import { getPopularAnime } from '../utils/api';

const Home = ({ popularAnimeList }) => {
  return (
    <>
      <Header />  {/* Pastikan Header ada di sini */}
      <main>
        <h1>Popular Anime</h1>
        <PopularAnimeSlider animeList={popularAnimeList} />
        
        <SedangTayang />  {/* Tidak perlu prop di sini */}
        
        <Rekomendasi />  {/* Tidak perlu prop di sini */}

        <RilisTerbaru />
      </main>
      <Footer />  {/* Pastikan Footer ada di sini */}
    </>
  );
}

export async function getServerSideProps() {
  // Mengambil data "Popular Anime" dari API
  const popularAnimeList = await getPopularAnime();

  return { 
    props: { 
      popularAnimeList, 
    } 
  };
}

export default Home;
