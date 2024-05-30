import axios from 'axios';

const API_URL = '/api/stickers';

const StickerService = {
  // Fetch all stickers
  fetchStickers: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get details of a specific sticker
  getSticker: async (stickerId) => {
    try {
      const response = await axios.get(`${API_URL}/${stickerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default StickerService;
