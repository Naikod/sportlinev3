import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Chiperline from 'chiperline';
const chiper = new Chiperline("SUPERSECRETSPORTLINEV3")

export default function OTPVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const otps = JSON.parse(chiper.decrypt(localStorage.getItem("otp")))
  const navigate = useNavigate()
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredOtp = otp.join('');
    // Assuming we send the entered OTP to the backend here
    if (enteredOtp === otps.otp) { // Replace this condition with actual OTP verification
      toast.success('OTP Verified Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.removeItem("otp")
      navigate("/")
    } else {
      toast.error('Invalid OTP. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4 text-center">Verify Email of {otps.email}</h1>
          <form onSubmit={handleSubmit} className="text-center">
            <div className="flex justify-center mb-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="w-12 h-12 m-1 text-center form-control rounded border border-gray-300 focus:outline-none focus:border-fuchsia-300"
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-900 text-white font-bold rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
