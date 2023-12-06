import axios from 'axios';

const accessKey = 'Aw9b_mPLsI93mptxLr9mYN0PsADnOTpFzJIw5w55V60';
const baseUrl = 'https://api.unsplash.com';

const buscarFotos = async (query) => {
    try {
        const response = await axios.get(`${baseUrl}/search/photos`, {
            headers: {
                Authorization: `Client-ID ${accessKey}`,
            },
            params: {
                query,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        throw error;
    }
};

export default buscarFotos;
