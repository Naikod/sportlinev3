import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import axios from "axios";

export default function () {
  const [dataInvoice, setDataInvoice] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [expireDate, setExpireDate] = useState("")
  const { paymentid } = useParams();
  const navigate = useNavigate();

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const request = await axios.get(
              `http://${process.env.REACT_APP_PAYMENT_IP}:5000/payment/status/${paymentid}`
              );
              setExpireDate(request.data[0].expireAt)
        } catch (error) {
          console.log(error)
        }
    }
    fetchData()
  }, []);

  useEffect(() => {
    const fetchInvoice = async () => {
      const response = await axios.get(
        `http://${process.env.REACT_APP_PAYMENT_IP}:5000/payment/status/${paymentid}`
      );
      setDataInvoice(response.data[0]);
    };

    fetchInvoice();

    const interval = setInterval(fetchInvoice, 2000);

    return () => clearInterval(interval);
  }, [paymentid]);

  useEffect(() => {
    if (expireDate) {
      const intervalId = setInterval(() => {
        const now = Date.now();
        const timeLeft = new Date(expireDate) - now;
        if (timeLeft <= 0) {
          clearInterval(intervalId);
          setTimeRemaining(0);
          navigate("/payment/expire")
        } else {
          setTimeRemaining(timeLeft);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [dataInvoice]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      {dataInvoice?.paid == "Done" ? (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="flex flex-col items-center">Success Paid!</div>
          </div>
        </>
      ) : (
        <div>
          <div className="flex flex-col justify-center items-start px-16 py-20 bg-white max-md:px-5">
            <div className="justify-between mt-5 ml-11 max-w-full w-[969px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                  <div
                    onClick={handleBack}
                    className="flex gap-4 justify-center text-4xl font-bold leading-10 whitespace-nowrap text-neutral-900 max-md:mt-10 cursor-pointer"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f24764d68b067f796363b77541faa4c59dd5563cf13bb34bfa5976198cf54a?"
                      className="shrink-0 my-auto aspect-[0.57] fill-neutral-900 w-[19px]"
                      alt="Back"
                    />
                    <div>Back</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-black max-md:mt-10 max-md:max-w-full">
                    {dataInvoice == null ? (
                      <>Loading Data...</>
                    ) : (
                      <div className="flex flex-col items-center pt-4 rounded-md border border-black border-solid max-md:max-w-full">
                        <div className="text-5xl font-bold leading-[57.2px]">
                          Bill
                        </div>
                        <div className="justify-center px-7 mt-7 text-xl leading-9 max-md:px-5">
                          Invoice ID: {dataInvoice._id}
                        </div>
                        <div className="mt-14 text-xl font-semibold leading-9 text-center max-md:mt-10 max-md:max-w-full">
                          Scan QR code di bawah ini untuk membayar
                        </div>
                        <div className="overflow-hidden relative flex-col items-center px-16 pt-6 max-w-full text-3xl font-bold leading-9 aspect-square w-[415px] max-md:px-5 max-md:pt-10">
                          <QRCode
                            value={`http://192.168.1.34:3000/payment/mobile/${dataInvoice.id}`}
                            className="mb-4"
                            size={256}
                          />
                          <div className="ml-16">{rupiah(dataInvoice.total)}</div>
                        </div>
                        <div className="flex flex-col justify-between items-center self-stretch px-20 py-4 mt-14 bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                          <div className="text-lg leading-8">
                            Sisa waktu pembayaran:{" "}
                          </div>
                          <div className="mt-3.5 text-4xl font-bold leading-10">
                            {formatTime(timeRemaining)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
