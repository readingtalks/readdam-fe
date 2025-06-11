import { SearchIcon, StarIcon } from 'lucide-react';
import { useState } from 'react';

export default function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('미움받을 용기');

  const book = {
    title: '미움받을 용기',
    author: '기시미 이치로, 고가 후미타케',
    publisher: '인플루엔셜',
    date: '2014.11.17',
    rating: 4.4,
    reviews: 152,
    image:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038', // 이미지 대체
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pt-20 text-sm font-sans">
      {/* 검색창 */}
      <div className="flex items-center space-x-2 mb-4">
        <select className="border px-2 py-1 rounded text-sm text-gray-700">
          <option>전체 카테고리</option>
        </select>
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-[#E88D67] rounded px-4 py-2 pr-10 text-sm"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#E88D67] text-white px-4 py-1 rounded text-sm">
            검색
          </button>
        </div>
      </div>

      {/* 검색 결과 문구 */}
      <div className="text-sm mb-4">
        <span className="text-[#E88D67] font-medium">‘{searchTerm}’</span>{' '}
        검색결과
      </div>

      {/* 결과 카드 */}
      <div className="flex items-start border-t pt-4 gap-4">
        <img
          src={book.image}
          alt={book.title}
          className=" object-cover border"
        />
        <div className="flex flex-col text-sm text-gray-800">
          <div className="font-bold text-base mb-1">{book.title}</div>
          <div className="mb-1">저자 | {book.author}</div>
          <div className="mb-1">출판 | {book.publisher}</div>
          <div className="mb-1">발행 | {book.date}</div>

          <div className="flex items-center text-[#E88D67] mb-2 text-sm">
            <StarIcon
              className={`w-6 h-6 ${'text-[#E88D67] fill-[#E88D67]'}`}
            />
            <span>{book.rating}</span>
            <span className="text-gray-600 ml-1">({book.reviews})</span>
          </div>

          <button className="bg-[#006989] text-white px-3 py-2 rounded text-sm font-bold w-fit">
            서재에 담기
          </button>
        </div>
      </div>
    </div>
  );
}
