import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
];

export default function PlaceReservationList() {
  const [selectedDate, setSelectedDate] = useState('2025-05-31');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pointCost, setPointCost] = useState(0);

  const reservations = [
    {
      id: 1,
      leader: '김독서',
      members: 8,
      place: '북카페 리드미',
      date: '2023-11-20',
      time: '14:00 - 16:00',
    },
  ];

  useEffect(() => {
    if (startTime && endTime) {
      const startIdx = timeSlots.indexOf(startTime);
      const endIdx = timeSlots.indexOf(endTime);
      const blockCount = endIdx - startIdx;
      if (blockCount > 0) {
        // 30분당 250P
        setPointCost(blockCount * 250);
      } else {
        setPointCost(0);
      }
    } else {
      setPointCost(0);
    }
  }, [startTime, endTime]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">예약 내역</h1>

      {/* 시간 선택 */}
      <div className="mb-6 flex gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            날짜
          </label>
          <input
            type="date"
            className="border px-3 py-1 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            시작 시간
          </label>
          <select
            className="border px-3 py-1 rounded"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          >
            <option value="">선택</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            종료 시간
          </label>
          <select
            className="border px-3 py-1 rounded"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          >
            <option value="">선택</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-sm mb-4">
        예약일시: <strong>{selectedDate}</strong>
        {startTime && endTime && ` (${startTime} ~ ${endTime})`}
        <br />
        사용 포인트: <strong>{pointCost.toLocaleString()}P</strong>
      </div>

      {/* 예약 테이블 */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-[900px] table-auto border rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                모임장
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                인원
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                장소
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                일시
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reservations.map((r) => (
              <tr key={r.id}>
                <td className="px-6 py-4 whitespace-nowrap">{r.leader}</td>
                <td className="px-6 py-4 whitespace-nowrap">{r.members}명</td>
                <td className="px-6 py-4 whitespace-nowrap">{r.place}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {r.date} ({r.time})
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="p-1 text-red-600 hover:bg-red-600 hover:text-white rounded"
                    title="예약 삭제"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        disabled={!startTime || !endTime || pointCost === 0}
      >
        바로 예약하기
      </button>
    </div>
  );
}
