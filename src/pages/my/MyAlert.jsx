import React from 'react';

const notifications = [
    {
        icon: '💬',
        title: '1:1 문의 답변 완료',
        message: '1:1 문의에 답변이 완료되었습니다. 지금 바로 확인 해 보세요.',
        type: '1:1문의',
        sender: '관리자',
    },
    {
        icon: '✨',
        title: '첨삭 포인트 지급',
        message: '첨삭 서비스 이용에 대한 포인트가 지급되었습니다.',
        type: 'point',
        sender: '유저아이디',
    },
    {
        icon: '🎉',
        title: '입담에 오신 걸 환영합니다',
        message: '첫 방문을 축하드려요. 다양한 기능을 지금 만나보세요.',
        type: 'welcome',
        sender: '관리자',
    },
];

const NotificationPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-xl font-semibold mb-6">나의 알림</h1>
            <div className="space-y-4">
                {notifications.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-200 rounded-md p-4 bg-white shadow-sm"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-2">
                                <span className="text-xl">{item.icon}</span>
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-gray-600 text-sm">{item.message}</p>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 whitespace-nowrap">
                                보낸사람: <span className="font-medium">{item.sender}</span>
                            </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-400">유형: {item.type}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPage;
