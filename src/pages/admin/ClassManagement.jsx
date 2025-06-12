import React, { useState } from 'react';
import { AdminContent } from '../components/AdminContent';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { DropdownMenu } from '../components/DropdownMenu';
import { SearchIcon, FilterIcon, SortAscIcon, SettingsIcon } from 'lucide-react';
export function MeetingManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('startDate');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPeriod, setFilterPeriod] = useState('all');
  // Sample meeting data
  const meetings = [{
    id: 1,
    name: '독서토론 모임',
    category: '인문학',
    creator: '김모임장',
    createdDate: '2023-07-01',
    startDate: '2023-08-15',
    status: '모집중',
    type: '오프라인',
    participants: '8/12',
    likes: 24,
    reviews: 5,
    rating: 4.8,
    reports: 0
  }, {
    id: 2,
    name: '소설 읽기 클럽',
    category: '문학',
    creator: '이독서',
    createdDate: '2023-06-15',
    startDate: '2023-07-20',
    status: '진행중',
    type: '온라인',
    participants: '15/20',
    likes: 42,
    reviews: 12,
    rating: 4.6,
    reports: 1
  }, {
    id: 3,
    name: '비즈니스 서적 스터디',
    category: '경영',
    creator: '박스터디',
    createdDate: '2023-05-20',
    startDate: '2023-06-10',
    status: '종료',
    type: '하이브리드',
    participants: '10/10',
    likes: 18,
    reviews: 8,
    rating: 4.2,
    reports: 0
  }, {
    id: 4,
    name: '철학 토론방',
    category: '인문학',
    creator: '최철학',
    createdDate: '2023-07-10',
    startDate: '2023-08-25',
    status: '모집중',
    type: '오프라인',
    participants: '5/15',
    likes: 31,
    reviews: 3,
    rating: 4.9,
    reports: 0
  }, {
    id: 5,
    name: '자기계발서 리뷰',
    category: '자기계발',
    creator: '정성장',
    createdDate: '2023-06-30',
    startDate: '2023-07-30',
    status: '진행중',
    type: '온라인',
    participants: '22/25',
    likes: 56,
    reviews: 18,
    rating: 4.7,
    reports: 2
  }];
  const getStatusBadge = status => {
    switch (status) {
      case '모집중':
        return <Badge variant="primary" size="small">
            {status}
          </Badge>;
      case '진행중':
        return <Badge variant="warning" size="small">
            {status}
          </Badge>;
      case '종료':
        return <Badge variant="secondary" size="small">
            {status}
          </Badge>;
      default:
        return <Badge variant="secondary" size="small">
            {status}
          </Badge>;
    }
  };
  return (<AdminContent title="모임 관리" breadcrumbs={['모임', '모임 관리', '모임 목록 조회']}>
      {/* Search, Filter, and Sort Controls */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex flex-wrap gap-4 items-end">
          {/* Search */}
          <div className="flex-1 min-w-64">
            <label className="block text-sm text-gray-600 mb-1">검색</label>
            <div className="relative">
              <input type="text" placeholder="모임명, 모임장, 카테고리로 검색..." className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="primary">검색</Button>
          </div>
          {/* Sort */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">정렬</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-40" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="startDate">시작일순</option>
              <option value="rating">평점순</option>
              <option value="participants">참여자순</option>
              <option value="likes">좋아요순</option>
              <option value="createdDate">개설일순</option>
            </select>
          </div>
          {/* Status Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">상태</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-32" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">전체</option>
              <option value="recruiting">모집중</option>
              <option value="ongoing">진행중</option>
              <option value="completed">종료</option>
            </select>
          </div>
          {/* Period Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">기간</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-32" value={filterPeriod} onChange={e => setFilterPeriod(e.target.value)}>
              <option value="all">전체</option>
              <option value="1month">최근 1달</option>
              <option value="3months">최근 3달</option>
              <option value="6months">최근 6달</option>
            </select>
          </div>
        </div>
      </div>
      {/* Meetings Table */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">
                  모임ID
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  모임명
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  카테고리
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  개설자
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  개설일
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  시작일
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  진행상태
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  모임형태
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  참여인원
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  좋아요
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  리뷰수
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  평점
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  신고수
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  관리
                </th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting, idx) => <tr key={meeting.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-3 py-3 text-sm">{meeting.id}</td>
                  <td className="px-3 py-3 text-sm font-medium">
                    {meeting.name}
                  </td>
                  <td className="px-3 py-3 text-sm">{meeting.category}</td>
                  <td className="px-3 py-3 text-sm">{meeting.creator}</td>
                  <td className="px-3 py-3 text-sm">{meeting.createdDate}</td>
                  <td className="px-3 py-3 text-sm">{meeting.startDate}</td>
                  <td className="px-3 py-3 text-sm">
                    {getStatusBadge(meeting.status)}
                  </td>
                  <td className="px-3 py-3 text-sm">{meeting.type}</td>
                  <td className="px-3 py-3 text-sm">{meeting.participants}</td>
                  <td className="px-3 py-3 text-sm">{meeting.likes}</td>
                  <td className="px-3 py-3 text-sm">{meeting.reviews}</td>
                  <td className="px-3 py-3 text-sm">
                    <span className="font-medium">{meeting.rating}</span>
                  </td>
                  <td className="px-3 py-3 text-sm">
                    <span className={meeting.reports > 0 ? 'text-red-600 font-medium' : ''}>
                      {meeting.reports}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm">
                    <DropdownMenu trigger={<Button size="small" variant="tertiary" iconOnly={<SettingsIcon className="h-4 w-4" />} />}>
                      <DropdownMenu.Item label="상세" onClick={() => console.log('상세')} />
                      <DropdownMenu.Item label="비활성화" onClick={() => console.log('비활성화')} />
                      <DropdownMenu.Divider />
                      <DropdownMenu.Item label="삭제" onClick={() => console.log('삭제')} />
                    </DropdownMenu>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          총 {meetings.length}개의 모임이 있습니다.
        </div>
        <div className="flex gap-1">
          <Button size="small" variant="secondary">
            이전
          </Button>
          <Button size="small" variant="primary">
            1
          </Button>
          <Button size="small" variant="secondary">
            2
          </Button>
          <Button size="small" variant="secondary">
            다음
          </Button>
        </div>
      </div>
    </AdminContent>
    );
}