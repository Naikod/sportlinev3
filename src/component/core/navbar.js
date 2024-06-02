import React, { useState, useEffect } from 'react';
import AuthService from '../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Chiperline from 'chiperline';
const chiper = new Chiperline("SUPERSECRETSPORTLINEV3")


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated);
  const navigate = useNavigate()
  
  useEffect(() => {
    if(localStorage.getItem("otp")){
      navigate("/otp-test")
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogin = () => {
    navigate("/login")
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    AuthService.logout()
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition duration-500 ${isScrolled ? 'bg-black' : 'bg-white'}`}>
      <div className="flex justify-center items-center px-16 pt-5 pb-7 max-md:px-5">
        <div className="flex gap-5 justify-between items-center w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 self-stretch my-auto text-xl font-bold leading-9 text-black whitespace-nowrap">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + (isScrolled ? "/img/Vector 5.png" : "/img/Vector 4.png")}
              className="shrink-0 aspect-[1.54] w-[52px]"
              alt="Logo"
            />
            <div className={`${isScrolled ? 'text-white' : 'text-black'}`}>Sportline</div>
          </div>
          <div className="flex gap-10 pt-2 justify-between self-stretch my-auto text-base leading-7 whitespace-nowrap text-neutral-900">
            <div className={`${isScrolled ? 'text-white' : 'text-black'}`}>Home</div>
            <div className={`${isScrolled ? 'text-white' : 'text-black'}`}>Product</div>
            <div className={`${isScrolled ? 'text-white' : 'text-black'}`}>About</div>
          </div>
          <div className="flex gap-2 justify-between self-stretch">
            {isLoggedIn ? (
              <>
                <div className="flex flex-col justify-center items-start py-3 pr-52 pl-2 rounded-md bg-neutral-200">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/38fb3c254c486f8c3def1d05c04abbf060a2b6ac58aa5873c5c3bcc19c1d6fb1?"
                    className="w-6 aspect-square"
                    alt="Search"
                  />
                </div>
                <div className="flex gap-2 justify-between self-start">
                  <div className="flex justify-center items-center self-start p-2 w-11 h-11 rounded-md bg-neutral-200">
                    <a href='/cart'>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/64e4dad8e7276b08483144cb8e9e01e3bcfe3ac906970740d44a4072c890c1a8?"
                        className="w-7 aspect-square"
                        alt="Cart"
                      />
                    </a>
                  </div>
                  <div className="flex justify-center items-center p-2 rounded-md bg-neutral-200 h-[45px] w-[45px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cd2febd8d17a1e89ad30de39e84fd8c34cf92d1ab6437e574c03ea5d4393c5?"
                      className="aspect-square w-[29px]"
                      alt="User"
                    />
                  </div>
                  <button onClick={handleLogout} className="text-white bg-red-500 px-3 py-2 rounded-md">Logout</button>
                </div>
              </>
            ) : (
              <button onClick={handleLogin} className="justify-center py-2 pr-10 pl-8 text-lg font-semibold leading-8 text-black rounded-md bg-neutral-200 max-md:px-5">Login</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
