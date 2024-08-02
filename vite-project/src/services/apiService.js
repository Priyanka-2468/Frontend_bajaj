import axios from 'axios';

const API_URL = 'http://localhost:3000/bfhl';

export const submitData = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data from API');
    }
};
