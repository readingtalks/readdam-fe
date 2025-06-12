import AddToLibraryModal from '@components/book/AddToLibraryModal';
import { SearchIcon, StarIcon, HeartIcon } from 'lucide-react';
import { useState } from 'react';

export default function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('미움받을 용기');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);

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
    <>
      <div className="max-w-5xl mx-auto p-6 pt-20 pb-20 text-sm font-sans">
        {/* 검색창 */}
        <div className="flex items-center space-x-2 mb-8">
          <select className="border px-2 h-10 rounded text-sm text-gray-700">
            <option>전체 카테고리</option>
            <option value="title">제목</option>
            <option value="writer">저자</option>
            <option value="publisher">출판사</option>
          </select>
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-[#E88D67] rounded pl-8 h-10 pr-4 text-sm focus:outline-none "
            />
          </div>
          <button className="bg-[#E88D67] text-white w-16 h-10 rounded text-sm">
            검색
          </button>
        </div>

        {/* 검색 결과 문구 */}
        <div className="text-[16px] mb-4 font-bold">
          <span className="text-[#E88D67]">‘{searchTerm}’</span> 검색결과
        </div>

        {/* 결과 카드 */}
        <div className="flex items-start border-t py-8 gap-4 border-b border-[#D9D9D9] relative">
          <img src={book.image} alt={book.title} className="object-cover" />
          <div className="flex flex-col text-sm text-gray-800">
            <div className="font-bold text-base mb-1">{book.title}</div>
            <div className="mb-1">저자 | {book.author}</div>
            <div className="mb-1">출판 | {book.publisher}</div>
            <div className="mb-1">발행 | {book.date}</div>

            <div className="flex items-center text-[#E88D67] mb-2 text-sm">
              <StarIcon
                className={`w-4 h-4 ${'text-[#E88D67] fill-[#E88D67]'} mr-2`}
              />
              <span className="text-black">{book.rating}</span>
              <span className="text-gray-600 ml-1">({book.reviews})</span>
            </div>
            <HeartIcon
              className={`w-6 h-6 ${
                liked ? 'fill-[#E88D67] text-[#E88D67]' : 'text-gray-400'
              } absolute top-8 right-8`}
              onClick={() => setLiked(!liked)}
            />
            <button
              className="bg-[#006989] text-white w-24 h-10 rounded-lg text-xs font-bold cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              서재에 담기
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <nav className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
              이전
            </button>
            <button className="px-3 py-1 text-sm bg-[#006989] text-white rounded">
              1
            </button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
              다음
            </button>
          </nav>
        </div>
      </div>

      {isModalOpen && (
        <AddToLibraryModal onClose={() => setIsModalOpen(!isModalOpen)} />
      )}
    </>
  );
}
