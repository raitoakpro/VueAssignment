import axios from "axios";

const API_BASE_URL = 'https://hotel-management-server.fly.dev/public';

export const fetchTypeRooms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/type-room/list`);
        console.log('API Response:', response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching type rooms:', error);
        throw error; // Ném lỗi để xử lý sau
      }
};