import { Suspense } from "react";
import RoutesWrapper from "./RoutesWrapper";
import Layouts from "./components/UI/Layouts";
import Loader from "./components/common/Loader";

const App = () => {
  return (
    <Layouts>
      <Suspense fallback={<Loader />}>
        <RoutesWrapper />
      </Suspense>
    </Layouts>
  )
};

export default App;
