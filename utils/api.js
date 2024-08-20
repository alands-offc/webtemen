import axios from 'axios';

// Base URL untuk Jikan API
const BASE_URL = 'https://api.jikan.moe/v4';

// Mendapatkan anime populer
export const getPopularAnime = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top/anime`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching popular anime:', error);
    return [];
  }
};

// Mendapatkan detail anime berdasarkan ID
export const getAnimeById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/anime/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching anime with ID ${id}:`, error);
    return null;
  }
};

// Mencari anime berdasarkan query
export const searchAnime = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/anime`, {
      params: { q: query },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    return [];
  }
};
