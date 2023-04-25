import ProgressBarWithStars from "../../common/custom/ProgressBarWithStars";

const CustomerReview = ({
  review_count,
  rating_five,
  rating_four,
  rating_three,
  rating_two,
  rating_one,
}) => {
  return (
    <section className="py-10 lg:mx-12">
      <div className="w-full pb-4">
        <h2 className="text-2xl lg:text-4xl font-semibold">Customer Reviews</h2>
      </div>
      <div className="border-y flex flex-col md:flex-row gap-5 lg:gap-24 px-0 py-4 lg:p-4">
        <div className="flex flex-row lg:flex-col items-center gap-5 lg:gap-0">
          <ProgressBarWithStars iconSize={25} noOfStar={5} />
          <p className="text-sm font-semibold pl-0 lg:pl-6">
            Based on {review_count} reviews
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <ProgressBarWithStars
            iconSize={25}
            percent={rating_five}
            reviewCount={Math.round((review_count * rating_five) / 100)}
            noOfStar={5}
          />
          <ProgressBarWithStars
            iconSize={25}
            percent={rating_four}
            reviewCount={Math.round((review_count * rating_four) / 100)}
            noOfStar={4}
          />
          <ProgressBarWithStars
            iconSize={25}
            percent={rating_three}
            reviewCount={Math.round((review_count * rating_three) / 100)}
            noOfStar={3}
          />
          <ProgressBarWithStars
            iconSize={25}
            percent={rating_two}
            reviewCount={Math.round((review_count * rating_two) / 100)}
            noOfStar={2}
          />
          <ProgressBarWithStars
            iconSize={25}
            percent={rating_one}
            reviewCount={Math.round((review_count * rating_one) / 100)}
            noOfStar={1}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
