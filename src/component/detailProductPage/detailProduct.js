import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import AuthService from '../auth/AuthProvider';
import "react-toastify/dist/ReactToastify.css";

export default function DetailProduct(props) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state
  const pricePerUnit = data.price; // Price per unit
  const totalPrice = pricePerUnit * quantity; // Calculate total price based on quantity
  const [isLoading, setIsLoading] = useState(true);
  const userDataID = AuthService.getCurrentUser()
  const { id } = useParams();

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const handleCart = () => {
    if(userDataID){
      toast.info(<div> Added to Cart! <a href="/cart">Cek Keranjang</a> </div>, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setProduct(prevProduct => {
        const updatedProduct = [...prevProduct, {product: { id: data._id, amount: quantity, total: totalPrice, image: data.images, name: data.name }, UserID: userDataID._id}];
        localStorage.setItem("cart", JSON.stringify(updatedProduct));
        return updatedProduct;
      });
      setTimeout(() => {
        navigate("/cart");
      }, 2000)
    } else {
      toast.error(<div> Please login first!</div>, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
    isLoading ? <>Loading Data...</> : 
    <div>
      <ToastContainer />
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
                src={process.env.PUBLIC_URL + `/product_image/${data.images}`}
                className="grow w-full aspect-[0.94] max-md:mt-10 max-md:max-w-full"
                alt="Product Detail"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-between mt-1 max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl font-bold leading-8 text-lime-700 max-md:max-w-full">
                  {data.category.includes("Limited") ? "LIMITED EDITION":""}
                </div>
                <div className="mt-5 text-4xl font-bold leading-10 text-neutral-900 max-md:max-w-full">
                  {data.name}
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
                  {data.description}
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
                    <button className="pt-1" onClick={handleCart}>Add to Cart</button>
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
