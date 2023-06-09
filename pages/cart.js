import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import React from "react";

const cart = () => {
  return (
    <div className=" w-full md:py-20">
      <Wrapper>
        {/* Heading start */}
        <div className=" text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className=" text-[28px] md:text-[34px] mb-5 font-semibold">
            <p> Shopping Cart</p>
          </div>
        </div>
        {/* Heading end */}
        {/* Cart content start */}
        <div className=" flex flex-col lg:flex-row gap-12 py-10">
          {/* CART ITEMS START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>

            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* CART ITEMS END */}
          {/* SUMMARY START */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  {/* &#8377;{subTotal} */}
                  &#8377; 12121
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>
            </div>

            {/* BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
              // onClick={handlePayment}
            >
              Checkout
              {/* {loading && <img src="/spinner.svg" />} */}
            </button>
            {/* BUTTON END */}
          </div>
          {/* SUMMARY END */}
        </div>
        {/* Cart content end */}
      </Wrapper>
    </div>
  );
};

export default cart;
