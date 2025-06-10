import React from 'react';
import { UsersIcon, CalendarIcon, BookOpenIcon } from 'lucide-react';

const RelatedGroups = ({ tags, groups }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">관련 독서모임</h2>
      {groups.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          관련 독서모임이 없습니다.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gray-200 relative">
                {group.image ? (
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#F3F7EC]">
                    <BookOpenIcon className="w-12 h-12 text-[#006989] opacity-30" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                  {group.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {group.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{group.date}</span>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className="w-4 h-4 mr-1" />
                    <span>
                      {group.members}/{group.maxMembers}명
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {group.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-[#F3F7EC] text-[#006989] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#006989] text-white text-sm rounded hover:bg-[#005C78]">
                  모임 상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {groups.length > 0 && (
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block text-[#006989] hover:text-[#005C78] font-medium"
          >
            더 많은 독서모임 보기
          </a>
        </div>
      )}
    </div>
  );
};
export default RelatedGroups;
