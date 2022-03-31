import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants/key-value';

export type TokenState = {
  accessToken: string | null;
  refreshToken: string | null;
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const saveAccessToken = (token: string) => {
  return localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const saveRefreshToken = (token: string) => {
  return localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
