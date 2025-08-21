import { request } from './apiClient';
import type { User } from '../types/auth';

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface ProfileResponse {
  message: string;
  user: User;
}

export const authAPI = {
  login: (email: string, password: string) =>
    request<LoginResponse>('post', '/auth/login', { email, password }),
  
  getProfile: () =>
    request<ProfileResponse>('get', '/auth/profile'),
};