import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PaymentPage({ match }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({paid: "Pending"});
  const idPayment = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const request = await axios.get(
                `http://${process.env.REACT_APP_PAYMENT_IP}:5000/payment/status/${idPayment.paymentid}`
              );
            setLoading(false)
            setData(request.data[0]);
            setStatus(true)
        } catch (error) {
            setMessage("Failed Fetching Data");
        }
    }
    fetchData()
  }, []);

  const handleConfirm = async () => {
    try {
      const response = await axios.post(
        `http://${process.env.REACT_APP_PAYMENT_IP}:5000/payment/confirm`,
        { id: idPayment.paymentid, amount: amount }
      );
      if (response.data.success) {
        if (response.data.data.total <= Number(amount)) {
          
          setStatus(true);
          setMessage("Payment confirmed successfully!");
        } else {
          setMessage("Saldo Kurang");
        }
      }
    } catch (error) {
      setMessage("Error confirming payment.");
    }
  };

  return (
    <>
    {loading ? <>Loading Data...</> : (data.paid == "Pending" && status ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Payment Page</h1>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full max-w-xs p-3 mb-4 text-lg border border-gray-300 rounded-md"
          />
          <button
            onClick={handleConfirm} 
            className="w-full max-w-xs p-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
            Confirm Payment
          </button>
          {message && <p className="mt-4 text-lg text-green-500">{message}</p>}
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            {data.paid == "Pending" ? <p>You can close this and back to app.</p> : <p>Code payment is expire!</p>}
            
          </div>
        </>
      ))}
      
    </>
  );
}

export default PaymentPage;
