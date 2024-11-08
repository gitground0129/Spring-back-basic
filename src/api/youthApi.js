// src/api/youthApi.js

import axios from "axios";

// Spring 서버 주소
export const API_SERVER_HOST = 'http://localhost:8080';
const prefix = `${API_SERVER_HOST}/api/youth`;

// 데이터를 가져오는 함수
export const fetchYouthData = async (params) => {
    try {
        const res = await axios.get(`${prefix}/data`, { params });
        return res.data;
    } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        throw error;
    }
};
