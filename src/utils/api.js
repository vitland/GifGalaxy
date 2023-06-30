import axios from 'axios';
const baseUrl = 'https://api.giphy.com/v1/gifs'
const api_key = 'HxxnuzzaWU2hzXbqp1bx5J1gasmNKnn8';

export const GiphyApi = {
    async searchGif(query, offset) {
        const response = await axios.get(`${baseUrl}/search?q=${query}&api_key=${api_key}&limit=9&offset=${offset}`)
        return response.data
    },
    async trendyGifs() {
        const response = await axios.get(`${baseUrl}/trending?&api_key=${api_key}&limit=9`)
        return response.data
    },
    async randomGif() {
        const response = await axios.get(`${baseUrl}/random?&api_key=${api_key}&limit=9`)
        return response.data
    },
}