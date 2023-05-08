import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and para start */}
        <div className=" text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className=" text-[23px]  md:text-[34px] mb-5 font-semibold leading-tight ">
            Cushioning for Your Miles
          </div>
          <div className=" font-medium text-[16px] md:text-xl">
     
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and para end */}

        {/* Product lists */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        {/* Product lists */}
      </Wrapper>
    </main>
  );
}
