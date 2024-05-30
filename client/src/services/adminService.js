import axios from 'axios';

const API_URL = '/api/admin';

const AdminService = {
  // Fetch all users
  fetchUsers: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch all stickers
  fetchStickers: async () => {
    try {
      const response = await axios.get(`${API_URL}/stickers`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add a new sticker
  addSticker: async (stickerData) => {
    try {
      const response = await axios.post(`${API_URL}/stickers`, stickerData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update a sticker
  updateSticker: async (stickerId, stickerData) => {
    try {
      const response = await axios.put(`${API_URL}/stickers/${stickerId}`, stickerData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete a sticker
  deleteSticker: async (stickerId) => {
    try {
      const response = await axios.delete(`${API_URL}/stickers/${stickerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default AdminService;
