import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import axios from "axios";

export default function () {
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [saldo, setsaldo] = useState(0);
  const [status, setStatus] = useState("");
  const idPayment = useParams();
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axios.get(
        `http://localhost:5000/payment/status/${idPayment.paymentid}`
      );
      setsaldo(response.data[0].total);
      setStatus(response.data[0].paid);
      setPaymentId(idPayment.paymentid);
      setPaymentUrl(
        `http://192.168.1.34:3000/payment/mobile/${idPayment.paymentid}`
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {status == "Done" ? (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="flex flex-col items-center">Success Paid!</div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
          <div className="flex flex-col items-center">
            {paymentUrl ? (

              <QRCode value={paymentUrl} className="mb-4" size={256} />


            ) : (
              <p>Loading QR Code...</p>
            )}
            <p className="text-lg font-medium">Scan me!</p>
          </div>
          {paymentId && (
            <>
                <h1 className="text-4xl">Total: Rp. {saldo}</h1>
              <p className="mt-4 text-lg">Payment ID: {paymentId}</p>
            </>
          )}
        </div>
      )}

      {/* <h3>Status Payment: {status}</h3> */}
      {/* {paymentUrl ? <QRCode value={paymentUrl} className="mb-4" /> : <p>Loading Qr...</p>} */}
    </div>
  );
}
