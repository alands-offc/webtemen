// pages/search.js
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimeCard from '../components/AnimeCard';
import { searchAnime } from '../utils/api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchAnime(query);
    setResults(data);
  };

  return (
    <>
      <Header />
      <main>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for anime..."
        />
        <button onClick={handleSearch}>Search</button>
        <div>
          {results.map(anime => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
