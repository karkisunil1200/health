import axios from 'axios';

export default axios.create({
  baseURL: 'https://priaid-symptom-checker-v1.p.rapidapi.com',
  headers: {
    Authorization: ' '
  }
});
