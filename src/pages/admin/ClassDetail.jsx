import React, { useState } from 'react';
import { AdminContent } from '../components/AdminContent';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { Tabs } from '../components/Tabs';
import { ChevronLeft, Star, Users, MessageSquare, ThumbsUp, Settings } from 'lucide-react';
export function MeetingDetail() {
  // 샘플 모임 데이터
  const meeting = {
    id: 1,
    name: '첫 번째 모임',
    type: '단기모임',
    status: '진행중',
    creator: '김모임장',
    startDate: '2023-08-01',
    endDate: '2023-09-30',
    participants: '8/12',
    likes: 24,
    reviews: 5,
    rating: 4.8,
    description: '이것은 첫 번째 모임입니다.',
    category: '독서토론'
  };
  // 샘플 참여자 데이터
  const participants = [{
    id: 1,
    name: '김참여',
    userId: 'user1',
    joinDate: '2023-08-01',
    hasReview: 'Y',
    status: '참여중'
  }, {
    id: 2,
    name: '이독서',
    userId: 'reader2',
    joinDate: '2023-08-02',
    hasReview: 'N',
    status: '참여중'
  }, {
    id: 3,
    name: '박토론',
    userId: 'discuss3',
    joinDate: '2023-08-03',
    hasReview: 'Y',
    status: '참여취소'
  }];
  // 샘플 리뷰 데이터
  const reviews = [{
    id: 1,
    title: '좋은 모임이었습니다',
    date: '2023-09-01',
    author: '김참여',
    reported: false
  }, {
    id: 2,
    title: '매우 유익했어요',
    date: '2023-09-02',
    author: '박토론',
    reported: true
  }];
  // 샘플 장소 사용 이력
  const placeUsage = [{
    id: 1,
    date: '2023-08-05',
    time: '14:00-16:00',
    participants: 8,
    status: '사용완료'
  }, {
    id: 2,
    date: '2023-08-12',
    time: '14:00-16:00',
    participants: 7,
    status: '사용완료'
  }];
  // 샘플 신고 이력
  const reports = [{
    id: 1,
    reporter: '익명',
    reason: '부적절한 내용',
    date: '2023-08-15',
    action: '경고 처리'
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
  return (
    <AdminContent title="모임 상세" breadcrumbs={['모임', '모임 관리', '모임 상세']}>
      {/* 뒤로가기 버튼 */}
      <Button variant="secondary" size="small" leftIcon={<ChevronLeft className="h-4 w-4" />} className="mb-4">
        모임 목록으로 돌아가기
      </Button>
      {/* 상단 요약 정보 카드 */}
      <Card className="mb-6">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{meeting.name}</h2>
              <div className="flex items-center gap-3 text-gray-600">
                <span>{meeting.type}</span>
                {getStatusBadge(meeting.status)}
                <span>개설자: {meeting.creator}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">모임 수정</Button>
              <Button variant="primary">모임 비활성화</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">참여인원</div>
                <div className="font-bold">{meeting.participants}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">좋아요</div>
                <div className="font-bold">{meeting.likes}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">리뷰</div>
                <div className="font-bold">{meeting.reviews}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">평점</div>
                <div className="font-bold">{meeting.rating}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* 탭 영역 */}
      <Tabs defaultTab="participants">
        <Tabs.List>
          <Tabs.Tab id="info">기본 정보</Tabs.Tab>
          <Tabs.Tab id="participants">참여자 목록</Tabs.Tab>
          <Tabs.Tab id="reviews">리뷰</Tabs.Tab>
          <Tabs.Tab id="places">장소 사용 이력</Tabs.Tab>
          <Tabs.Tab id="reports">신고 이력</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="info">
          <div className="p-4">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-3 w-32 text-gray-600">카테고리</td>
                  <td>{meeting.category}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">모임 기간</td>
                  <td>
                    {meeting.startDate} ~ {meeting.endDate}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">모임 설명</td>
                  <td>{meeting.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="participants">
          <div className="p-4">
            <div className="mb-4">
              <input type="text" placeholder="이름 또는 아이디로 검색" className="w-64 px-3 py-2 border rounded-md" />
            </div>
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">이름</th>
                  <th className="px-4 py-2 text-left">아이디</th>
                  <th className="px-4 py-2 text-left">참여일</th>
                  <th className="px-4 py-2 text-left">후기작성</th>
                  <th className="px-4 py-2 text-left">상태</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant, idx) => <tr key={participant.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{participant.name}</td>
                    <td className="px-4 py-2">{participant.userId}</td>
                    <td className="px-4 py-2">{participant.joinDate}</td>
                    <td className="px-4 py-2">{participant.hasReview}</td>
                    <td className="px-4 py-2">{participant.status}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="reviews">
          <div className="p-4">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">제목</th>
                  <th className="px-4 py-2 text-left">작성일</th>
                  <th className="px-4 py-2 text-left">작성자</th>
                  <th className="px-4 py-2 text-left">신고여부</th>
                  <th className="px-4 py-2 text-left">관리</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, idx) => <tr key={review.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{review.title}</td>
                    <td className="px-4 py-2">{review.date}</td>
                    <td className="px-4 py-2">{review.author}</td>
                    <td className="px-4 py-2">
                      {review.reported && <Badge variant="error" size="small">
                          신고
                        </Badge>}
                    </td>
                    <td className="px-4 py-2">
                      <Button size="small" variant="secondary">
                        삭제
                      </Button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="places">
          <div className="p-4">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">날짜</th>
                  <th className="px-4 py-2 text-left">시간</th>
                  <th className="px-4 py-2 text-left">참여인원</th>
                  <th className="px-4 py-2 text-left">상태</th>
                </tr>
              </thead>
              <tbody>
                {placeUsage.map((usage, idx) => <tr key={usage.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{usage.date}</td>
                    <td className="px-4 py-2">{usage.time}</td>
                    <td className="px-4 py-2">{usage.participants}명</td>
                    <td className="px-4 py-2">{usage.status}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="reports">
          <div className="p-4">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">신고자</th>
                  <th className="px-4 py-2 text-left">사유</th>
                  <th className="px-4 py-2 text-left">신고일자</th>
                  <th className="px-4 py-2 text-left">처리결과</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, idx) => <tr key={report.id} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{report.reporter}</td>
                    <td className="px-4 py-2">{report.reason}</td>
                    <td className="px-4 py-2">{report.date}</td>
                    <td className="px-4 py-2">{report.action}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Tabs.Panel>
      </Tabs>
    </AdminContent>
    );
}