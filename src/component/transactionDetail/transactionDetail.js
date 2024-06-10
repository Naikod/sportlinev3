import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../auth/AuthProvider";
import axios from "axios";


export default function TransactionDetail() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const {id} = useParams();
  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `http://${process.env.REACT_APP_PAYMENT_IP}:5000/transactions/${id}`
        );
        setData(request.data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleBack = () => {
    navigate("/transactions");
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    (loading?"loading":
    <div>
      <div className="flex flex-col justify-center items-center p-4 bg-white max-md:px-5">
        <div
          onClick={handleBack}
          className="flex gap-4 justify-center self-start mt-4 ml-11 text-4xl font-bold leading-10 whitespace-nowrap text-neutral-900 max-md:mt-10 max-md:ml-2.5 hover:cursor-pointer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f24764d68b067f796363b77541faa4c59dd5563cf13bb34bfa5976198cf54a?"
            className="shrink-0 my-auto aspect-[0.57] fill-neutral-900 w-[19px]"
          />
          <div>Back</div>
        </div>
        <div className="justify-between self-center mt-28 w-full max-w-[1190px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col gap-5 max-md:gap-0">
            <div className="flex flex-col w-full">
              <div className="flex flex-col justify-between max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col p-6 mb-6 bg-white rounded-xl shadow-sm border">
                  <div className="text-3xl font-bold mb-6">
                    Transaction Details
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col w-full max-md:w-full border p-4 rounded-lg">
                      <div className="text-xl font-bold mb-2">
                        Product Information
                      </div>
                      <img
                        loading="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          `/product_image/${data.productID.Product.images}`
                        }
                        className="shrink-0 max-w-full aspect-[1.04] w-[149px] mb-4"
                      />
                      <div>Name: {data.productID.Product.name}</div>
                      <div>
                        Description:{" "}
                        {data.productID.Product.description}
                      </div>
                      <div>
                        Price: {rupiah(data.productID.Product.price)}
                      </div>
                      <div>Amount: {data.productID.Amount}</div>
                    </div>
                    <div className="flex flex-col w-full max-md:w-full border p-4 rounded-lg">
                      <div className="text-xl font-bold mb-2">
                        User Information
                      </div>
                      <div>Username: {data.accountID.username}</div>
                      <div>Email: {data.accountID.email}</div>
                      <div>Address: {data.accountID.address}</div>
                      <div>
                        Phone Number: {data.accountID.phoneNumber}
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-md:w-full border p-4 rounded-lg">
                      <div className="text-xl font-bold mb-2">
                        Payment Information
                      </div>
                      <div>Payment ID: {data.paymentID.id}</div>
                      <div>Total: {rupiah(data.paymentID.total)}</div>
                      <div>Status: {data.paymentID.paid}</div>
                      <div>
                        Expire At:{" "}
                        {new Date(
                          data.paymentID.expireAt
                        ).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full border">
              <div className="flex flex-col grow justify-between px-8 py-5 mx-auto w-full text-lg leading-8 bg-white rounded-xl shadow-sm text-neutral-900 max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between">
                  <div>Subtotal</div>
                  <div>
                    Rp.{" "}
                    {data.productID.Product.price *
                      data.productID.Amount}
                  </div>
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
                  <div>{rupiah(data.paymentID.total)}</div>
                </div>
                <div
                  onClick={printReceipt}
                  className="justify-center items-center px-24 py-2 mt-20 font-bold text-white bg-lime-600 rounded-lg max-md:px-5 max-md:mt-10 hover:cursor-pointer"
                >
                  Print the Receipt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
