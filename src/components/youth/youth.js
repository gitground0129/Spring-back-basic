// src/pages/youth/YouthPage.js

import React, { useEffect, useState } from 'react';
import { fetchYouthData } from '../../api/youthApi';

const YouthPage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const params = {
                    openApiVlak: "e29e2ce85afe1d10bb41b74e", // 실제 API 키 사용
                    display: 10,
                    pageIndex: 1,
                };
                const result = await fetchYouthData(params);
                setData(result);
            } catch (error) {
                setError(error);
            }
        };

        loadData();
    }, []);

    if (error) {
        return <div>오류 발생: {error.message}</div>;
    }

    return (
        <div>
            <h1>청년 정책 데이터</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map((policy, index) => (
                        <li key={index} style={{ marginBottom: '20px' }}>
                            <h3>{policy.polyBizSjnm}</h3>
                            <p><strong>정책 설명:</strong> {policy.polyItcnCn}</p>
                            <p><strong>신청 기간:</strong> {policy.rqutPrdCn}</p>
                            <p><strong>관리 기관:</strong> {policy.polyBizTy}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>데이터를 불러오는 중...</p>
            )}
        </div>
    );
};

export default YouthPage;
