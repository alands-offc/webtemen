import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnimeDetail from '../../components/AnimeDetail';

// Data statis untuk anime
const animeData = {
  '1': {
    id: '1',
    title: 'One Piece',
    imageUrl: '/images/One Piece-landspace.jpg',
    description: 'Gol D. Roger dikenal sebagai “Raja Bajak Laut,” makhluk terkuat dan paling terkenal yang pernah berlayar di Grand Line. Penangkapan dan eksekusi Roger oleh Pemerintah Dunia membawa perubahan di seluruh dunia. Kata-kata terakhirnya sebelum kematiannya mengungkapkan keberadaan harta terbesar di dunia, One Piece. Pengungkapan inilah yang menghasilkan Grand Age of Pirates, orang-orang yang bermimpi menemukan One Piece — yang menjanjikan kekayaan dan ketenaran dalam jumlah tak terbatas — dan sangat mungkin puncak kemuliaan serta gelar Raja Bajak Laut.Enter Monkey D. Luffy, bocah berusia 17 tahun yang menentang definisi standar Anda tentang bajak laut. Alih-alih persona populer dari desa bajak laut yang jahat, keras, dan tak bergigi untuk bersenang-senang, alasan Luffy untuk menjadi bajak laut adalah salah satu keajaiban: pikiran tentang petualangan yang mengasyikkan yang membawanya ke orang-orang yang membangkitkan minat dan akhirnya, harta yang dijanjikan. Mengikuti jejak pahlawan masa kecilnya, Luffy dan krunya melakukan perjalanan melintasi Grand Line, mengalami petualangan gila, mengungkap misteri gelap dan melawan musuh yang kuat, semua untuk mencapai kekayaan yang paling didambakan dari semua kekayaan',
    genre: ['Action', 'Adventure'],
    status: 'Ongoing',
    releaseDate: '2024-05-01',
    trailerId: 'xmbxe0Jtxmc', // ID video YouTube
    episodes: [
      { number: 1, watched: true },
      { number: 2, watched: false },
      // Tambahkan episode lainnya di sini
    ],
    cast: [
      {
        name: 'Haruto Yamada',
        character: 'Kazuki Takahashi',
        image: '/images/cast-1.jpg', // Path gambar untuk aktor ini
      },
      {
        name: 'Aiko Tanaka',
        character: 'Miyu Hoshino',
        image: '/images/cast-2.jpg',
      },
      {
        name: 'Taro Suzuki',
        character: 'Ryuji Sakamoto',
        image: '/images/cast-3.jpg',
      },
      {
        name: 'Sakura Kobayashi',
        character: 'Aya Yukimura',
        image: '/images/cast-4.jpg',
      },
      // Tambahkan pemeran lainnya di sini
    ]
  },
  '2': {
    id: '2',
    title: 'Example Anime 2',
    imageUrl: '/images/example-anime-2.jpg',
    description: 'Ini adalah deskripsi contoh anime 2.',
    genre: ['Drama', 'Romance'],
    status: 'Completed',
    releaseDate: '2023-09-15',
    trailerId: 'dQw4w9WgXcQ', // ID video YouTube
    episodes: [
      { number: 1, watched: true },
      { number: 2, watched: true },
      // Tambahkan episode lainnya di sini
    ],
    cast: [
      {
        name: 'Kenjiro Tsuda',
        character: 'Hiroshi Tanaka',
        image: '/images/cast-5.jpg',
      },
      {
        name: 'Megumi Hayashibara',
        character: 'Yumi Takeda',
        image: '/images/cast-6.jpg',
      },
      // Tambahkan pemeran lainnya di sini
    ]
  }
  // Tambahkan data anime lainnya di sini
};

function AnimePage({ anime }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <AnimeDetail anime={anime} />
      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const { id } = context.params;

  // Ambil data dari data statis berdasarkan ID
  const anime = animeData[id];

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

export default AnimePage;
