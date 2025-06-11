import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">좋아요</h1>
                <div className="flex space-x-2">
                    <button className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                        신청 가능 모임만 보기
                    </button>
                    <button className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
                        최신순
                    </button>
                </div>
            </header>

            {/* Navigation */}
            <nav className="flex space-x-4 mb-6">
                {/* These links would navigate to different pages */}
                <a href="/myLikeClass" className="text-lg font-semibold text-gray-700 hover:text-blue-600">모임</a>
                <a href="/myLikePlace" className="text-lg font-semibold text-gray-700 hover:text-blue-600">장소</a>
                <a href="/myLikeWrite" className="text-lg font-semibold text-gray-700 hover:text-blue-600">글쓰기</a>
                <a href="/myLikeBook" className="text-lg font-semibold text-gray-700 hover:text-blue-600">책</a>
            </nav>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Woman on phone"
                    title="에세이로 만나는 일상의 소"
                    tags={['정기모임', '도서관']}
                    date="2023.11.15"
                    location="서울 강남구"
                    participants="8/10명"
                />

                {/* Card 2 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Bookshelf"
                    title="심리학 명저 함께 읽기"
                    tags={['정기모임', '도서관']}
                    date="2023.11.20"
                    location="서울 마포구"
                    participants="5/8명"
                />

                {/* Card 3 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Stack of books"
                    title="자기계발 북클럽"
                    tags={[]}
                    date="2023.11.25"
                    location="서울 서초구"
                    participants="6/10명"
                />

                {/* Card 4 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Row of books"
                    title="고전 문학 함께 읽기"
                    tags={[]}
                    date="2023.12.01"
                    location="서울 종로구"
                    participants="4/8명"
                />

                {/* Card 5 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Person reaching for book"
                    title="현대 소설 독서모임"
                    tags={[]}
                    date="2023.12.05"
                    location="서울 용산구"
                    participants="7/10명"
                />

                {/* Card 6 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Lemon"
                    title="시 읽는 밤"
                    tags={[]}
                    date="2023.12.10"
                    location="서울 동작구"
                    participants="6/12명"
                />

                {/* Card 7 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Concert crowd"
                    title="경제적 스터디"
                    tags={[]}
                    date="2023.12.15"
                    location="서울 영등포구"
                    participants="6/8명"
                />

                {/* Card 8 */}
                <Card
                    image="https://via.placeholder.com/300x200" // Replace with actual image URL
                    alt="Milk and Honey book"
                    title="철학 책 모임"
                    tags={[]}
                    date="2023.12.20"
                    location="서울 강서구"
                    participants="4/6명"
                />
            </div>

            {/* "더보기" button */}
            <div className="flex justify-center mt-8">
                <button className="bg-white border border-gray-300 rounded-lg px-6 py-2 text-gray-700 hover:bg-gray-50">
                    더보기
                </button>
            </div>
        </div>
    );
};

const Card = ({ image, alt, title, tags, date, location, participants }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img src={image} alt={alt} className="w-full h-48 object-cover" />
                <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-gray-500 text-sm mb-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {date}
                </div>
                <div className="text-gray-500 text-sm mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {location}
                </div>
                <div className="text-gray-500 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2m0 0l4-4m-4 4l-4-4m4-2l4-4m-4 4l-4 4"></path>
                    </svg>
                    {participants}
                </div>
            </div>
        </div>
    );
};

export default HomePage;