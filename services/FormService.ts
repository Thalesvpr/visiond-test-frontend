import axios, { AxiosResponse } from 'axios';
import { getUserId } from './AuthService';
const API_URL = import.meta.env.VITE_REACT_API_URL;

 export const getAllForms = async (): Promise<AxiosResponse> => {
  const userId =  getUserId()
  const response = await axios.get(`${API_URL}/forms/${userId}`, {
    
  });
  return response
};
