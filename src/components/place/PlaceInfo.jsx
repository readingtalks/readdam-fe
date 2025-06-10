import React, { useState } from 'react';
import { HeartIcon, ClockIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const PlaceInfo = ({ place }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(place.likes);
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* 이미지 슬라이더 */}
      <div className="relative h-80 bg-gray-200">
        {place.images && place.images.length > 0 ? (
          <img
            src={place.images[0]}
            alt={place.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-400">이미지가 없습니다</p>
          </div>
        )}
      </div>
      {/* 장소 정보 */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold text-gray-800">{place.name}</h1>
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 text-gray-600"
          >
            <HeartIcon
              className={`w-6 h-6 ${
                liked ? 'fill-[#E88D67] text-[#E88D67]' : 'text-gray-400'
              }`}
            />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <MapPinIcon className="w-5 h-5 text-[#006989] mr-2 mt-0.5" />
            <span className="text-gray-700">{place.address}</span>
          </div>
          <div className="flex items-start">
            <PhoneIcon className="w-5 h-5 text-[#006989] mr-2 mt-0.5" />
            <span className="text-gray-700">{place.contact}</span>
          </div>
          <div className="flex items-start">
            <ClockIcon className="w-5 h-5 text-[#006989] mr-2 mt-0.5" />
            <span className="text-gray-700">{place.hours}</span>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            공간 소개
          </h2>
          <p className="text-gray-600 leading-relaxed">{place.description}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">키워드</h2>
          <div className="flex flex-wrap gap-2">
            {place.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#F3F7EC] text-[#006989] text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceInfo;
