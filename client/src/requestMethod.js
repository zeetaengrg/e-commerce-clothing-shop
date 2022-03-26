import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjVjYTFkMjYwZWU1NWRlOTBjNTc1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI2OTY5MSwiZXhwIjoxNjQ4NTI4ODkxfQ.cM3bFSUYXuR4WObD5dIGrufqziX_cS-a46Pq3axle7M";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`,
    },
});
