import axios from "axios";

const API_BASE_URL =
  "https://5erhg0u08g.execute-api.ap-northeast-2.amazonaws.com";

const API = axios.create({
  baseURL: API_BASE_URL,
});

// 요청 시 Authorization 헤더 추가
API.interceptors.request.use((config) => {
  if (
    !localStorage.getItem(
      "CognitoIdentityServiceProvider.7j09fmn00udb6fpt8hhij1jlqk.e4089d5c-d0f1-7074-6b70-a4fcc7bae68c.accessToken"
    )
  ) {
    console.log("토큰없음.");
    return config;
  }
  const token = localStorage.getItem(
    "CognitoIdentityServiceProvider.7j09fmn00udb6fpt8hhij1jlqk.e4089d5c-d0f1-7074-6b70-a4fcc7bae68c.accessToken"
  );
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
