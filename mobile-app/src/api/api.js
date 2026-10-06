import axios from 'axios';

// Replace with your IP address
// const baseURL = "http://192.168.X.X:5000/api/content"; // Example: http://192.168.1.5:5000/api/content
const baseURL = "http://192.168.1.10:5000/api/content";


export const getContent = async (filters) => {
  const response = await axios.get(baseURL, { params: filters });
  return response.data;
};
