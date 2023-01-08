import axios from "axios";

const BASE_URL = `https://ecommerse-back-swarup-saha.onrender.com/api`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRmOTkxODY4YWI3NWRiZDUxMGNmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzIxMTg0NSwiZXhwIjoxNjczNDcxMDQ1fQ.wxucz1Gl_2UOcyRxAyprEbuxSdUcwP5ZmOCbbmxe-fI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: `Bearer ${TOKEN}`,
});
