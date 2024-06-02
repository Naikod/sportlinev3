import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Cart() {
  const [dataCart, setDataCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  useEffect(() => {
    const total = selectedProductIds.reduce((accumulator, index) => accumulator + dataCart[index].total, 0);
    setTotalPrice(total);
  }, [selectedProductIds, dataCart]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const pay = async () => {
    const response = await axios.post('http://localhost:5000/payment', {total: totalPrice+25000})
    navigate(`/payment/${response.data.id}`)
  };

  const removeItem = (id) => {
    const updatedCart = dataCart.filter(item => item.id !== id);
    console.log(updatedCart)
    setDataCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const toggleSelectItem = (id) => {
    setSelectedProductIds(prevSelectedIds => 
      prevSelectedIds.includes(id) 
        ? prevSelectedIds.filter(selectedId => selectedId !== id) 
        : [...prevSelectedIds, id]
    );
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-20 bg-white max-md:px-5">
        <div
          onClick={handleBack}
          className="flex gap-4 justify-center self-start mt-16 ml-11 text-4xl font-bold leading-10 whitespace-nowrap text-neutral-900 max-md:mt-10 max-md:ml-2.5 hover:cursor-pointer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f24764d68b067f796363b77541faa4c59dd5563cf13bb34bfa5976198cf54a?"
            className="shrink-0 my-auto aspect-[0.57] fill-neutral-900 w-[19px]"
          />
          <div>Back</div>
        </div>
        <div className="justify-between self-center mt-28 w-full max-w-[1190px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-between max-md:mt-10 max-md:max-w-full">
                {/* Card */}
                {dataCart.map((data, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-center px-3.5 py-2 mb-6 bg-white rounded-xl shadow-sm max-md:max-w-full border`}
                    onClick={() => toggleSelectItem(index)}
                  >
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                      <div className={`shrink-0 self-start mr-0.5 rounded-lg border border-black border-solid h-[30px] w-[30px] ${selectedProductIds.includes(index) ? "bg-lime-700" : ""}`} />
                      <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                            <div className="flex gap-3 justify-between mr-52 text-lg leading-8 text-neutral-900 max-md:mt-10">
                              <img
                                loading="lazy"
                                src={process.env.PUBLIC_URL + `/product_image/${data.image}`}
                                className="shrink-0 max-w-full aspect-[1.04] w-[149px]"
                              />
                              <div className="flex flex-col justify-between self-start">
                                <div className="font-bold">
                                  {data.name}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-between font-bold max-md:mt-10">
                              <button className="self-end text-xl leading-9 text-black" onClick={(e) => {
                              e.stopPropagation();
                              removeItem(data.id);
                            }}>
                                x
                              </button>
                              <div className="mt-28 -mr-1 ml-14 text-lg leading-8 text-neutral-900 max-md:mt-10">
                                Rp. {data.total}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full border">
              <div className="flex flex-col grow justify-between px-8 py-5 mx-auto w-full text-lg leading-8 bg-white rounded-xl shadow-sm text-neutral-900 max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between">
                  <div>Subtotal</div>
                  <div>Rp. {totalPrice}</div>
                </div>
                <div className="flex gap-5 justify-between mt-1.5">
                  <div>Shipping</div>
                  <div>Rp. 25.000</div>
                </div>
                <img
                  loading="lazy"
                  src={process.env.PUBLIC_URL + "/img/garis.png"}
                  className="mt-64 w-full stroke-black stroke-opacity-30 max-md:mt-10"
                />
                <div className="flex gap-5 justify-between mt-2.5 font-bold">
                  <div>Total</div>
                  <div>Rp. {totalPrice + 25000}</div>
                </div>
                <div
                  onClick={pay}
                  className="justify-center items-center px-24 py-2 mt-20 font-bold text-white bg-lime-600 rounded-lg max-md:px-5 max-md:mt-10 hover: cursor-pointer"
                >
                  Check Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
