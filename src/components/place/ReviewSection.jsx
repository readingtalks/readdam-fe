import React, { useState } from 'react';
import { StarIcon, EditIcon, TrashIcon } from 'lucide-react';

const ReviewSection = ({
  placeId,
  initialReviews,
  isLoggedIn,
  currentUserId = 1, // 임시로 사용자 ID 설정
}) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    rating: 5,
    content: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [editRating, setEditRating] = useState(5);
  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.content.trim()) return;
    const review = {
      id: Date.now(),
      userId: currentUserId,
      userName: '사용자',
      rating: newReview.rating,
      content: newReview.content,
      date: new Date().toLocaleDateString(),
    };
    setReviews([review, ...reviews]);
    setNewReview({
      rating: 5,
      content: '',
    });
  };
  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };
  const handleEdit = (review) => {
    setEditingId(review.id);
    setEditContent(review.content);
    setEditRating(review.rating);
  };
  const handleUpdateReview = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id
          ? {
              ...review,
              content: editContent,
              rating: editRating,
            }
          : review
      )
    );
    setEditingId(null);
  };
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-[#E8BD67] fill-[#E8BD67]' : 'text-gray-300'
          }`}
        />
      ));
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">리뷰</h2>
      {isLoggedIn && (
        <form onSubmit={handleAddReview} className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">평점</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() =>
                    setNewReview({
                      ...newReview,
                      rating: star,
                    })
                  }
                  className="focus:outline-none"
                >
                  <StarIcon
                    className={`w-6 h-6 ${
                      star <= newReview.rating
                        ? 'text-[#E8BD67] fill-[#E8BD67]'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">내용</label>
            <textarea
              value={newReview.content}
              onChange={(e) =>
                setNewReview({
                  ...newReview,
                  content: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#006989]"
              rows={4}
              placeholder="리뷰를 작성해주세요"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#006989] text-white rounded-md hover:bg-[#005C78]"
          >
            리뷰 작성
          </button>
        </form>
      )}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            아직 리뷰가 없습니다.
          </p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-100 pb-6 last:border-0"
            >
              {editingId === review.id ? (
                <div className="space-y-3">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setEditRating(star)}
                        className="focus:outline-none"
                      >
                        <StarIcon
                          className={`w-5 h-5 ${
                            star <= editRating
                              ? 'text-[#E8BD67] fill-[#E8BD67]'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#006989]"
                    rows={3}
                  ></textarea>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateReview(review.id)}
                      className="px-3 py-1 bg-[#006989] text-white rounded-md hover:bg-[#005C78] text-sm"
                    >
                      저장
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm"
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-gray-800">
                        {review.userName}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    {isLoggedIn && review.userId === currentUserId && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(review)}
                          className="text-gray-500 hover:text-[#006989]"
                        >
                          <EditIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(review.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ReviewSection;
