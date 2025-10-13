export default function CustomerReviews({ reviews }) {
  // console.log(reviews);
  return (
    <>
      <h2 className="text-2xl font-semibold py-2 border-b-2 border-gray-500">Reviews:</h2>
      {reviews.map((review, index) => (
        <div key={index} className="flex flex-col py-2 border-b-1 border-gray-300">
          <div className="flex items-center justify-between">
            <b className="text-xl font-semibold">{review.reviewerName}</b>
            <span className="text-md font-semibold">Reating: {review.rating}</span>
          </div>
          <div className="flex items-start justify-between">
            <span>{review.comment}</span>
            <span className="text-xs">{review.date}</span>
          </div>
        </div>
      ))}
    </>
  );
}