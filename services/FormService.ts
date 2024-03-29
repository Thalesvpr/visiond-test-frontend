import axios, { AxiosResponse } from 'axios';
import { getUserId } from './AuthService';
import { Form } from '../src/pages/NewForm';
const API_URL = import.meta.env.VITE_REACT_API_URL;

 export const getAllForms = async (): Promise<AxiosResponse> => {
  const userId =  getUserId()
  const response = await axios.get(`${API_URL}/forms/${userId}`, {
    
  });
  return response
};
export const getFormById = async (id: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${API_URL}/form/${id}`, {
  });
  return response
};

export const postForms = async (formData: Form): Promise<AxiosResponse> => {
  const userId =  getUserId()
  formData.createdBy = userId!
  console.log(formData)
  const response = await axios.post(`${API_URL}/forms`, 
    formData
  );
  return response
};
