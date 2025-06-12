import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPointRefund from './MyPointRefund';

const dummyData = [
    { type: '적립', point: 100, reason: '모임 참여', date: '2024-03-15' },
    { type: '사용', point: -50, reason: '프리미엄 기능 이용', date: '2024-03-10' },
    { type: '적립', point: 500, reason: '포인트 구매', date: '2024-03-01' },
];

const PointHistory = () => {
    const [activeTab, setActiveTab] = useState('전체');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const filtered = activeTab === '전체' ? dummyData : dummyData.filter(item => item.type === activeTab);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-4">보유 포인트</h2>
            <div className="text-2xl font-bold text-orange-500 mb-6">1,000 P</div>

            <div className="flex border-b mb-4">
                {['전체', '적립', '사용'].map(tab => (
                    <button
                        key={tab}
                        className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <table className="w-full text-sm text-left mb-6">
                <thead>
                    <tr className="border-b">
                        <th className="py-2">구분</th>
                        <th className="py-2">포인트</th>
                        <th className="py-2">사유</th>
                        <th className="py-2">일시</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((item, idx) => (
                        <tr key={idx} className="border-b">
                            <td className="py-2 text-blue-500 font-semibold">{item.type}</td>
                            <td className={`py-2 ${item.point < 0 ? 'text-red-500' : 'text-blue-600'}`}>
                                {item.point > 0 ? `+${item.point}` : item.point}P
                            </td>
                            <td className="py-2">{item.reason}</td>
                            <td className="py-2">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="text-center mb-8">
                <button className="text-gray-500 hover:underline">더보기</button>
            </div>

            <div className="flex justify-end space-x-2">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                    환불신청
                </button>
                <button
                    onClick={() => navigate('/myPointCharge')}
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                    충전하기
                </button>
            </div>

            {/* 환불 신청 모달 */}
            
            {showModal && <MyPointRefund onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default PointHistory;
