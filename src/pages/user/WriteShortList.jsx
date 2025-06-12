import React from 'react'
import {
  HeartIcon,
  ClockIcon,
  PenIcon,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import singoIcon from '@assets/singo.png';

const WriteShortList = () => {
  const navigate = useNavigate()

  const dummyQuestion = {
    text: '오늘 읽은 책에서 가장 인상 깊었던 구절은 무엇인가요?',
    timestamp: '2일 18시간 32분',
  }
  const dummyAnswers = [
    {
      id: 1,
      author: '책벌레123',
      content:
        '삶이 그대를 속일지라도 슬퍼하거나 노하지 말라. 슬픈 날을 참고 견디면 기쁜 날이 오리니',
      likes: 12,
      comments: 3,
      color: 'mint',
    },
    {
      id: 2,
      author: '독서광89',
      content: '우리는 우리가 꿈꾸는 세상을 만들어 갈 수 있다',
      likes: 8,
      comments: 2,
      color: 'yellow',
    },
    {
      id: 3,
      author: '문학소녀',
      content: '지나간 시간은 다시 돌아오지 않는다. 현재에 최선을 다하라',
      likes: 15,
      comments: 5,
      color: 'mint',
    },
    {
      id: 4,
      author: '책읽는밤',
      content: '별을 따려면 하늘 높이 올라가야 한다',
      likes: 10,
      comments: 4,
      color: 'pink',
    },
    {
      id: 5,
      author: '독서하는곰',
      content: '모든 위대한 일은 작은 시작으로부터 비롯된다',
      likes: 7,
      comments: 1,
      color: 'yellow',
    },
    {
      id: 6,
      author: '책갈피',
      content: '당신의 미래는 당신이 지금 무엇을 하고 있느냐에 달려있다',
      likes: 9,
      comments: 2,
      color: 'mint',
    },
  ]

  const getPostItColor = (color) => {
    switch (color) {
      case 'mint':
        return 'bg-[#E8F3F1]'
      case 'yellow':
        return 'bg-[#FFF8E7]'
      case 'pink':
        return 'bg-[#FFE8F3]'
      default:
        return 'bg-[#E8F3F1]'
    }
  }

  const handleReport = (id) => {
    alert('신고가 접수되었습니다.')
  }

  return (
    <div className="w-full min-h-screen bg-[#F9F9F7] py-8">
      <div className="container mx-auto px-4">
        {/* 탭 메뉴 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-6">
            <button
              onClick={() => navigate('/writeList')}
              className="text-xl font-bold text-gray-400"
            >
              전체 글
            </button>
            <button className="text-xl font-bold text-[#006989]">
              읽담한줄
            </button>
          </div>
          <button className="px-6 py-2.5 bg-[#006989] text-white rounded-lg hover:bg-[#005C78] transition-colors flex items-center">
            <PenIcon className="w-5 h-5 mr-2" />답변작성
          </button>
        </div>

        {/* 질문 영역 */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border-2 border-[#E88D67]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-[#006989]">
              {dummyQuestion.text}
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>{dummyQuestion.timestamp}</span>
            </div>
          </div>
        </div>

        {/* 답변 포스트잇 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyAnswers.map((answer) => (
            <div
              key={answer.id}
              className={`${getPostItColor(answer.color)} aspect-square p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow relative transform hover:-rotate-1 hover:translate-y-[-2px]`}
              style={{
                boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
                backgroundImage:
                  'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-medium text-gray-800">
                  {answer.author}
                </span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-gray-600">
                    <HeartIcon className="w-4 h-4" />
                    <span>{answer.likes}</span>
                  </button>
                </div>
              </div>
              <p className="text-gray-700 text-sm line-clamp-5">
                {answer.content}
              </p>
              <button
                onClick={() => handleReport(answer.id)}
                className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <img src={singoIcon} alt="신고" className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WriteShortList
