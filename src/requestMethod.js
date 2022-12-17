import axios from "axios";

const BASE_URL = `http://localhost:5000/api/`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRmOTkxODY4YWI3NWRiZDUxMGNmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTE1NzA4MywiZXhwIjoxNjY5NDE2MjgzfQ.s83kd5a8radE1P0_VpoYw10ra1iqKNzS_aE3YuUgGYM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: `Bearer ${TOKEN}`,
});
