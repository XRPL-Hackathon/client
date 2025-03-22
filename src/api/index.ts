import axios from "axios";

const API_BASE_URL =
  "https://5erhg0u08g.execute-api.ap-northeast-2.amazonaws.com";

const API = axios.create({
  baseURL: API_BASE_URL,
});

// 요청 시 Authorization 헤더 추가
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
