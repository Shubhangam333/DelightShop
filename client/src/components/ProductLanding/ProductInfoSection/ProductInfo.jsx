import React from "react";

const ProductInfo = () => {
  return (
    <div className="w-full font-medium">
      <h1 className="text-black text-2xl">
        XIAOMI Redmi Note 11 - 128 GB, Graphite Gray
      </h1>
      <p>3 star</p>
      <h2 className="text-slate-900 font-medium text-xl">Product Details</h2>
      <div className="details flex py-1 ">
        <h5 className="text-slate-600 text-xl">Battery:</h5>
        <p>5000 mAh</p>
      </div>
      <div className="details flex py-1">
        <h5 className="text-slate-600">CPU :</h5>
        <p>2.4 GHz octa-core processor</p>
      </div>
      <div className="details flex ">
        <h5 className="text-slate-600">RAM :</h5>
        <p>125 GB</p>
      </div>
      <div className="details flex ">
        <h5 className="text-slate-600">Operating System :</h5>
        <p>Android 11</p>
      </div>
      <div className="details flex ">
        <h5 className="text-slate-600">Main Camera :</h5>
        <p> Quad 50 MP / 8 MP / 2 MP / 2 MP main cameras</p>
      </div>
      <div className="details flex ">
        <h5 className="text-slate-600">Screen :</h5>
        <p>6.43" Full HD+ AMOLED touchscreen</p>
      </div>
      <div className="details flex ">
        <h5 className="text-slate-600">Front Camera :</h5>
        <p>13 MP front camera</p>
      </div>
    </div>
  );
};

export default ProductInfo;
