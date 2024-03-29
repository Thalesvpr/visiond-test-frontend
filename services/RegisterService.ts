import axios from 'axios';
const API_URL = import.meta.env.VITE_REACT_API_URL;

 export const registerUser = async (name: string, email: string, password: string): Promise<void> => {
  await axios.post(`${API_URL}/user/register`, {
    name,
    email,
    password,
  });
};


