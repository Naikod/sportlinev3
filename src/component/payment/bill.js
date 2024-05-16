import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Bill() {
    const navigate = useNavigate()
    const handleBack = () => {
      navigate("/")
    }

  return (
    <div>
      <div className="flex flex-col justify-center items-start px-16 py-20 bg-white max-md:px-5">
        <div className="justify-between mt-5 ml-11 max-w-full w-[969px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
              <div onClick={handleBack} className="flex gap-4 justify-center text-4xl font-bold leading-10 whitespace-nowrap text-neutral-900 max-md:mt-10 cursor-pointer">
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
                <div className="flex flex-col items-center pt-4 rounded-md border border-black border-solid max-md:max-w-full">
                  <div className="text-5xl font-bold leading-[57.2px]">Bill</div>
                  <div className="justify-center px-7 mt-7 text-xl leading-9 max-md:px-5">
                    Invoice ID: 3H5VFG2JY78VG43
                  </div>
                  <div className="mt-14 text-xl font-semibold leading-9 text-center max-md:mt-10 max-md:max-w-full">
                    Scan QR code di bawah ini untuk membayar
                  </div>
                  <div className="overflow-hidden relative flex-col items-center px-16 pt-96 max-w-full text-3xl font-bold leading-9 aspect-square w-[415px] max-md:px-5 max-md:pt-10">
                    <img
                      loading="lazy"
                      src={process.env.PUBLIC_URL + "/img/qr.png"}
                      className="object-cover absolute inset-0 size-full"
                      alt="QR Code"
                    />
                    <div className='ml-16'>
                      Rp 150.000
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center self-stretch px-20 py-4 mt-14 bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-lg leading-8">
                      Sisa waktu pembayaran:{" "}
                    </div>
                    <div className="mt-3.5 text-4xl font-bold leading-10">
                      03:24:11
                    </div>
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
