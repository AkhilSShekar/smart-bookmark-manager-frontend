import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://smart-bookmark-manager-backend.vercel.app/api/bookmarks'
});

export default instance;