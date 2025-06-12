import React, { useState } from 'react';
import { AdminContent } from '../components/AdminContent';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SearchIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
export function WritingManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdDate');
  const [filterGenre, setFilterGenre] = useState('all');
  const [filterVisibility, setFilterVisibility] = useState('all');
  const [filterFeedback, setFilterFeedback] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  // 샘플 글 데이터
  const writings = [{
    id: 1,
    title: '첫 번째 시 작품',
    author: '김시인',
    genre: '시',
    createdDate: '2023-08-01',
    visibility: '전체공개',
    hasFeedback: true,
    feedbackPeriod: '2023-08-01 ~ 2023-08-15',
    comments: 12,
    reports: 0,
    status: '정상'
  }, {
    id: 2,
    title: '단편 소설 습작',
    author: '이작가',
    genre: '소설',
    createdDate: '2023-07-28',
    visibility: '멤버공개',
    hasFeedback: true,
    feedbackPeriod: '2023-07-28 ~ 2023-08-11',
    comments: 8,
    reports: 3,
    status: '신고됨'
  }, {
    id: 3,
    title: '여행 에세이',
    author: '박여행',
    genre: '에세이',
    createdDate: '2023-07-25',
    visibility: '비공개',
    hasFeedback: false,
    feedbackPeriod: '-',
    comments: 0,
    reports: 0,
    status: '숨김'
  }, {
    id: 4,
    title: '삭제된 글',
    author: '최삭제',
    genre: '시',
    createdDate: '2023-07-20',
    visibility: '전체공개',
    hasFeedback: false,
    feedbackPeriod: '-',
    comments: 5,
    reports: 5,
    status: '삭제'
  }];
  const getStatusBadge = status => {
    switch (status) {
      case '정상':
        return <Badge variant="primary" size="small">
            {status}
          </Badge>;
      case '신고됨':
        return <Badge variant="error" size="small">
            {status}
          </Badge>;
      case '숨김':
        return <Badge variant="warning" size="small">
            {status}
          </Badge>;
      case '삭제':
        return <Badge variant="secondary" size="small">
            {status}
          </Badge>;
      default:
        return <Badge variant="secondary" size="small">
            {status}
          </Badge>;
    }
  };
  return (<AdminContent title="글 관리" breadcrumbs={['글쓰기', '글 관리', '글 목록']}>
      {/* Filters and Search */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex flex-wrap gap-4">
          {/* Search */}
          <div className="flex-1 min-w-64">
            <label className="block text-sm text-gray-600 mb-1">검색</label>
            <div className="relative">
              <input type="text" placeholder="제목, 작성자, 글 ID로 검색..." className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          {/* Sort */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">정렬</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-40" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="createdDate">작성일순</option>
              <option value="likes">좋아요순</option>
              <option value="reports">신고수순</option>
            </select>
          </div>
          {/* Genre Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">장르</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-32" value={filterGenre} onChange={e => setFilterGenre(e.target.value)}>
              <option value="all">전체</option>
              <option value="poetry">시</option>
              <option value="novel">소설</option>
              <option value="essay">에세이</option>
            </select>
          </div>
          {/* Visibility Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              공개 여부
            </label>
            <select className="border border-gray-300 rounded px-3 py-2 w-32" value={filterVisibility} onChange={e => setFilterVisibility(e.target.value)}>
              <option value="all">전체</option>
              <option value="public">전체공개</option>
              <option value="members">멤버공개</option>
              <option value="private">비공개</option>
            </select>
          </div>
          {/* Feedback Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              첨삭 여부
            </label>
            <select className="border border-gray-300 rounded px-3 py-2 w-32" value={filterFeedback} onChange={e => setFilterFeedback(e.target.value)}>
              <option value="all">전체</option>
              <option value="requested">요청됨</option>
              <option value="completed">완료</option>
              <option value="rejected">거절</option>
            </select>
          </div>
          {/* Status Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">상태</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-32" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">전체</option>
              <option value="normal">정상</option>
              <option value="reported">신고됨</option>
              <option value="hidden">숨김</option>
              <option value="deleted">삭제</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <Button variant="primary">검색</Button>
            <Button variant="secondary">초기화</Button>
          </div>
        </div>
      </div>
      {/* Writings Table */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  제목
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  작성자
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  장르
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  작성일
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  공개
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  첨삭여부
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  첨삭기간
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  댓글수
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  신고수
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  상태
                </th>
                <th className="px-3 py-2 text-left text-sm font-medium">
                  관리
                </th>
              </tr>
            </thead>
            <tbody>
              {writings.map((writing, idx) => <tr key={writing.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-3 py-3 text-sm">{writing.id}</td>
                  <td className="px-3 py-3 text-sm font-medium">
                    {writing.title}
                  </td>
                  <td className="px-3 py-3 text-sm">{writing.author}</td>
                  <td className="px-3 py-3 text-sm">{writing.genre}</td>
                  <td className="px-3 py-3 text-sm">{writing.createdDate}</td>
                  <td className="px-3 py-3 text-sm">{writing.visibility}</td>
                  <td className="px-3 py-3 text-sm">
                    {writing.hasFeedback ? '있음' : '없음'}
                  </td>
                  <td className="px-3 py-3 text-sm">
                    {writing.feedbackPeriod}
                  </td>
                  <td className="px-3 py-3 text-sm">{writing.comments}</td>
                  <td className="px-3 py-3 text-sm">
                    <span className={writing.reports > 0 ? 'text-red-600 font-medium' : ''}>
                      {writing.reports}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm">
                    {getStatusBadge(writing.status)}
                  </td>
                  <td className="px-3 py-3 text-sm">
                    <div className="flex gap-2">
                      <Button size="small" variant="secondary">
                        상세
                      </Button>
                      <Button size="small" variant="tertiary" iconOnly={writing.status === '숨김' ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />} />
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          총 {writings.length}개의 글이 있습니다.
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
    </AdminContent>);
}