export interface AuthData {
  username: string;
  password: string;
}
export interface AuthResponse {
  message: string;
  data: {
    user: string;
    isAuth: boolean;
  };
}
