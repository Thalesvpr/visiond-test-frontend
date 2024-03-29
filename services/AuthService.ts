import axios from 'axios';
const API_URL = import.meta.env.VITE_REACT_API_URL;

 export const login = async (email: string, password: string): Promise<void> => {
  const response = await axios.post(`${API_URL}/user/login`, {
    email,
    password,
  });

  const token = response.data.token;
  saveToken(token);
  const userId = response.data.userId;
  console.log('userId ---------')
  console.log(userId)

  const userName = response.data.name;
  saveUserProprets(userId, userName);
};

 const saveToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};
const saveUserProprets = (userId: string, name:string): void => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', name);

  };

export const isAuthenticated = (): boolean  => {
    return !!localStorage.getItem('authToken');
  };

  export const getUserId = (): string | null => {
    return localStorage.getItem('userId');
  };

  export const getUserName = (): string | null => {
    return localStorage.getItem('userName');
  };
export const logout = (): void => {
    localStorage.removeItem('authToken');
    console.log("logout")
}
