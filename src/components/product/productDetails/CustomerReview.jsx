import ProgressBarWithStars from "../../common/custom/ProgressBarWithStars";

const CustomerReview = () => {
  return (
    <section>
      <div className="w-full pb-4">
        <h2 className="text-2xl lg:text-4xl font-semibold">Customer Reviews</h2>
      </div>
      <div className="border-y flex flex-col md:flex-row gap-5 lg:gap-24 px-0 py-4 lg:p-4">
        <div className="flex flex-row lg:flex-col items-center gap-5 lg:gap-0">
          <ProgressBarWithStars iconSize={25} noOfStar={5} />
          <p className="text-sm font-semibold pl-0 lg:pl-6">
            Based on 1887 reviews
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <ProgressBarWithStars iconSize={25} percent={80} noOfStar={5} />
          <ProgressBarWithStars iconSize={25} percent={60} noOfStar={4} />
          <ProgressBarWithStars iconSize={25} percent={40} noOfStar={3} />
          <ProgressBarWithStars iconSize={25} percent={20} noOfStar={2} />
          <ProgressBarWithStars iconSize={25} percent={5} noOfStar={1} />
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
