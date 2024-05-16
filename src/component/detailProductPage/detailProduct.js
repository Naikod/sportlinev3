import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DetailProduct() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1); // Initialize quantity state
  const pricePerUnit = 150000; // Price per unit
  const totalPrice = pricePerUnit * quantity; // Calculate total price based on quantity

  const back = () => {
    navigate("/");
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent quantity from going below 1
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-20 bg-white max-md:px-5">
        <div
          onClick={back}
          className="flex gap-4 justify-center self-start mt-12 ml-11 text-4xl font-bold leading-10 whitespace-nowrap text-neutral-900 max-md:mt-10 max-md:ml-2.5 hover:cursor-pointer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f24764d68b067f796363b77541faa4c59dd5563cf13bb34bfa5976198cf54a?"
            className="shrink-0 my-auto aspect-[0.57] fill-neutral-900 w-[19px]"
            alt="Back"
          />
          <div>Back</div>
        </div>
        <div className="justify-between self-center mt-20 w-full max-w-[1192px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + "/img/detailImg.png"}
                className="grow w-full aspect-[0.94] max-md:mt-10 max-md:max-w-full"
                alt="Product Detail"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-between mt-1 max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl font-bold leading-8 text-lime-700 max-md:max-w-full">
                  LIMITED EDITION
                </div>
                <div className="mt-5 text-4xl font-bold leading-10 text-neutral-900 max-md:max-w-full">
                  Sportline Running V2
                </div>
                <div className="flex gap-1.5 self-start mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                    className="shrink-0  aspect-[1.09] fill-yellow-400  w-[26px]"
                    alt="Star"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                    className="shrink-0  aspect-[1.09] fill-yellow-400  w-[26px]"
                    alt="Star"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                    className="shrink-0  aspect-[1.09] fill-yellow-400  w-[26px]"
                    alt="Star"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                    className="shrink-0  aspect-[1.09] fill-yellow-400  w-[26px]"
                    alt="Star"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6714a2d96be780850d7572a162aae76b6d0b989e5b4dd70a9da11fac0fdf9d97?"
                    className="shrink-0  aspect-[1.09]  w-[26px]"
                    alt="Star"
                  />
                </div>
                <div className="mt-12 mb-16 text-xl font-semibold leading-9 text-neutral-900 max-md:mt-10 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </div>
                <div className="mt-8 text-3xl font-bold leading-9 text-neutral-900 max-md:max-w-full">
                  Rp. {totalPrice.toLocaleString()}
                </div>
                <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-between items-start">
                    <div onClick={handleDecrease} className="flex justify-center items-center self-stretch px-3 py-3.5 rounded-md bg-zinc-300 cursor-pointer">
                      <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/img/min.png"}
                        className="border-black border-solid aspect-square border-[0px] stroke-[0px] stroke-black w-[26px]"
                        alt="Decrease"
                      />
                    </div>
                    <div className="justify-center px-6 py-2 text-3xl font-bold leading-9 text-black whitespace-nowrap rounded-md bg-zinc-300 max-md:px-5">
                      {quantity}
                    </div>
                    <div onClick={handleIncrease} className="flex justify-center items-center self-stretch px-3 py-3.5 rounded-md bg-zinc-300 cursor-pointer">
                      <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/img/plus.png"}
                        className="border-black border-solid aspect-square border-[0px] stroke-[0px] stroke-black w-[26px]"
                        alt="Increase"
                      />
                    </div>
                  </div>
                  <div className="flex gap-0.5 justify-between px-5 py-2 text-lg font-bold leading-8 bg-lime-300 rounded-md text-neutral-900 max-md:px-5 cursor-pointer">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/71b0fec136aa6d02e3e75abbe07d61197ab16d04c9ad796db8fbd4f182e2d850?"
                      className="shrink-0 my-auto aspect-square fill-neutral-900 w-[17px]"
                      alt="Cart"
                    />
                    <div className="pt-1">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
