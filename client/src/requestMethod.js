import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjVjYTFkMjYwZWU1NWRlOTBjNTc1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTU2ODUyMywiZXhwIjoxNjQ5ODI3NzIzfQ.kBY_d2eJssN6bgzJYUYSHvd78y1cA78EBoCzZj13o0Q";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
