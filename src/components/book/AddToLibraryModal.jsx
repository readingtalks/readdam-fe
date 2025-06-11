import React, { useState } from 'react';
import { XIcon, PlusIcon, BookmarkIcon } from 'lucide-react';
const AddToLibraryModal = ({ onClose }) => {
  const [libraries] = useState([
    {
      id: 1,
      name: '인생책',
      count: 12,
    },
    {
      id: 2,
      name: '읽은책',
      count: 45,
    },
    {
      id: 3,
      name: '읽고 싶은 책',
      count: 23,
    },
    {
      id: 4,
      name: '추천하고 싶은 책',
      count: 8,
    },
  ]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">서재에 추가</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-3 mb-6">
          {libraries.map((library) => (
            <button
              key={library.id}
              className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#006989] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center">
                <BookmarkIcon className="w-5 h-5 text-[#E88D67] mr-3" />
                <span className="text-gray-800">{library.name}</span>
              </div>
              <span className="text-sm text-gray-500">{library.count}권</span>
            </button>
          ))}
        </div>
        <button className="w-full flex items-center justify-center p-4 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:border-[#006989] hover:text-[#006989] transition-all duration-200">
          <PlusIcon className="w-5 h-5 mr-2" />새 서재 만들기
        </button>
      </div>
    </div>
  );
};
export default AddToLibraryModal;
