import React from 'react'

export default function NavbarLogin() {
  return (
    <div>
      <div className="flex justify-center items-center px-16 py-16 whitespace-nowrap bg-white max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1281px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2.5 self-start text-xl font-bold leading-9 text-black">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "/img/Vector 4.png"}
            className="shrink-0 aspect-[1.54] w-[52px]"
          />
          <div>Sportline</div>
        </div>
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto mr-52 text-base leading-7 text-neutral-900">
            <div>Home</div>
            <div>Product</div>
            <div className="mr-52">About</div>
          </div>
          <div className="justify-center py-2 pr-10 pl-8 text-lg font-semibold leading-8 text-black rounded-md bg-neutral-200 max-md:px-5">
            Login
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
