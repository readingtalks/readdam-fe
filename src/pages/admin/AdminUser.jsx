import React, { useState } from 'react';
import { Button } from '../components/Button';
export function AdminUser() {
  const [view, setView] = useState('all');
  // Sample member data
  const members = [{
    id: 1,
    name: '김회원',
    userId: 'user1',
    email: 'user1@example.com',
    status: '활성',
    joinDate: '2023-05-15',
    lastLogin: '2023-08-01'
  }, {
    id: 2,
    name: '이독자',
    userId: 'reader2',
    email: 'reader2@example.com',
    status: '활성',
    joinDate: '2023-04-22',
    lastLogin: '2023-07-30'
  }, {
    id: 3,
    name: '박책벌레',
    userId: 'bookworm3',
    email: 'bookworm3@example.com',
    status: '휴면',
    joinDate: '2023-03-10',
    lastLogin: '2023-06-15'
  }, {
    id: 4,
    name: '최모임장',
    userId: 'leader4',
    email: 'leader4@example.com',
    status: '활성',
    joinDate: '2023-02-05',
    lastLogin: '2023-07-29'
  }, {
    id: 5,
    name: '정회원',
    userId: 'member5',
    email: 'member5@example.com',
    status: '활성',
    joinDate: '2023-01-20',
    lastLogin: '2023-07-25'
  }];
  return (<AdminContent title="회원 관리" breadcrumbs={['회원관리', '전체 회원 목록']}>
      {/* View Selection Buttons */}
      <div className="flex mb-4 gap-2">
        <Button variant={view === 'all' ? 'primary' : 'secondary'} onClick={() => setView('all')}>
          전체 회원
        </Button>
      </div>
      {/* Filters and Actions */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              검색 조건
            </label>
            <select className="border border-gray-300 rounded px-2 py-1 w-32">
              <option>전체</option>
              <option>이름</option>
              <option>아이디</option>
              <option>이메일</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              회원 상태
            </label>
            <select className="border border-gray-300 rounded px-2 py-1 w-32">
              <option>전체</option>
              <option>활성</option>
              <option>휴면</option>
              <option>정지</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button variant="primary">검색</Button>
          </div>
        </div>
      </div>
      {/* Members Table */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">이름</th>
              <th className="px-4 py-2 text-left">아이디</th>
              <th className="px-4 py-2 text-left">이메일</th>
              <th className="px-4 py-2 text-left">상태</th>
              <th className="px-4 py-2 text-left">가입일</th>
              <th className="px-4 py-2 text-left">마지막 로그인</th>
              <th className="px-4 py-2 text-left">관리</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => <tr key={member.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="px-4 py-3">{member.id}</td>
                <td className="px-4 py-3">{member.name}</td>
                <td className="px-4 py-3">{member.userId}</td>
                <td className="px-4 py-3">{member.email}</td>
                <td className="px-4 py-3">{member.status}</td>
                <td className="px-4 py-3">{member.joinDate}</td>
                <td className="px-4 py-3">{member.lastLogin}</td>
                <td className="px-4 py-3">
                  <Button size="small" variant="tertiary">
                    상세
                  </Button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">총 5명의 회원이 있습니다.</div>
        <div className="flex gap-1">
          <Button size="small" variant="secondary">
            이전
          </Button>
          <Button size="small" variant="primary">
            1
          </Button>
          <Button size="small" variant="secondary">
            다음
          </Button>
        </div>
      </div>
    </AdminContent>
    );
}
export default AdminUser;