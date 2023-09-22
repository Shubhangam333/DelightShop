import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center m-12">
      <CirclesWithBar
        height="100"
        width="100"
        color="#DB2626"
        wrapperStyle={{}}
        wrapperClass={{}}
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Loader;
