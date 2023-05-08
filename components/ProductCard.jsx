import React from "react";
import Link from "next/link";

const ProductCard = () => {
  return <Link href="/product/1" className=" transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
    <img className=" w-full" src="/product-1.webp" alt="" />
    <div className=" p-4 text-black/[.9]">
       <h2 className=" text-lg font-medium">Product Name</h2> 
       <div className=" flex items-center text-black/[.5]">
        <p className=" mr-2 text-lg font-semibold">$ 20.00</p>
        <p className=" line-through mr-2 text-lg font-semibold">$ 25.00</p>
        <p className=" ml-auto text-base font-medium text-green-500">20% off</p>
       </div>
    </div>
  </Link>;
};

export default ProductCard;
