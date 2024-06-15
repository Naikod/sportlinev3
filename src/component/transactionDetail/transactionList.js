import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../auth/AuthProvider";
import axios from "axios";

// const transactionHistoryData = [];

export default function TransactionHistory() {
  const [transactionHistoryData, settransactionHistoryData] = useState([]);
  const dataAccount = AuthService.getCurrentUser();
  const navigate = useNavigate();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `http://${process.env.REACT_APP_PAYMENT_IP}:5000/transactions`
        );
        console.log(
          request.data.filter((ids) => {
            return ids.accountID._id == AuthService.getCurrentUser()._id;
          })
        );
        settransactionHistoryData(
          request.data.filter((ids) => {
            return ids.accountID._id == AuthService.getCurrentUser()._id;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleBack = () => {
    navigate("/");
  };
  const handleTransactionClick = (transactionId) => {
    window.open(`/transaction-detail/${transactionId}`, "_blank");
  };

  if (!transactionHistoryData) {
    return <>Loading data...</>;
  }
  return !transactionHistoryData ? (
    "Loading Data"
  ) : (
    <div className="flex flex-col justify-center items-center p-20 bg-white max-md:px-5">
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
      <div>
        Hello! {dataAccount.username}, {dataAccount.email}
      </div>
      <div className="text-3xl font-bold mb-6">Transaction History</div>
      <div className="w-full max-w-[1190px]">
        {transactionHistoryData.map((transaction) => (
          <div
            key={transaction._id}
            onClick={() => handleTransactionClick(transaction._id)}
            className="flex justify-between p-6 mb-4 bg-white rounded-xl shadow-sm border cursor-pointer hover:bg-gray-100"
          >
            <div className="flex flex-col">
            {new Date(transaction.createdAt).toLocaleString()}
              <div className="text-xl font-bold">
                {transaction.productID.Product.name}
              </div>
              <div className="text-gray-600">
                {transaction.productID.Product.description}
              </div>
            </div>
            <div className="flex flex-col text-right">
              <div className="text-xl font-bold">
                {rupiah(transaction.paymentID.total)}
              </div>
              <div className="text-gray-600">
                Status Pembayaran: {transaction.paymentID.paid}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
