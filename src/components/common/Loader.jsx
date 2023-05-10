import {
  // FadingDots,
  // Hypnosis,
  // FlippingSquare,
  // FillingBottle,
  // BarWave,
  Messaging,
  // FadingBalls,
} from "react-cssfx-loading";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-10">
      {/* <Hypnosis width="100px" height="100px" color="gray" />
      <FadingDots width="100px" height="100px" color="gray" />
      <FlippingSquare width="100px" height="100px" color="gray" />
      <FillingBottle width="100px" height="100px" color="gray" />
      <BarWave width="50px" height="50px" color="gray" /> */}
      <Messaging width="20px" height="20px" color="black" />
      {/* <FadingBalls width="70px" height="20px" color="black" /> */}
    </div>
  );
};
export default Loader;
