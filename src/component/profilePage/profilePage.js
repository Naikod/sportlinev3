import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-start px-20 py-20 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between mt-44 max-md:mt-10">
        <div className="shrink-0 w-20 h-20 rounded-full bg-zinc-300" />
        <div className="flex flex-col justify-between my-auto">
          <div className="text-3xl font-bold leading-9 text-black">
            Username
          </div>
          <div className="mt-1.5 text-xl leading-9 text-lime-700">
            Sportline Member Since 2024
          </div>
        </div>
      </div>
      <div className="mt-16 text-3xl font-bold leading-9 text-black max-md:mt-10">
        History Order
      </div>
      <div className="flex gap-5 justify-between mt-10 ml-6 text-xl font-semibold leading-9 text-black max-md:mt-10 max-md:ml-2.5">
        <div>All</div>
        <div>On The Way</div>
        <div>Finish</div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-start self-stretch px-5 mt-1.5 w-full border border-gray-300 max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/974c377b4369965c8b3a4245ac655f263ab0d18dfd78d9e6eedc206d55370a84?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60516f1a3581e12bc7d3be617f73d07b2611ebaea83808f4250a29cd9227878f?"
          className="border-2 border-lime-700 border-solid aspect-[33.33] stroke-[2px] stroke-lime-700 w-[33px]"
        />
      </div>
      <div className="flex flex-col justify-center p-3 mt-10 max-w-full rounded-md border border-solid border-neutral-200 w-[745px] max-md:mt-10">
        <div className="justify-between max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3 justify-between text-lg leading-8 text-neutral-900 max-md:mt-10">
                <img
                  loading="lazy"
                  src={process.env.PUBLIC_URL + "/img/detailImg.png"}
                  className="shrink-0 max-w-full aspect-[1.04] w-[149px]"
                />
                <div className="flex flex-col justify-between self-start">
                  <div className="font-bold">Sportline Running V2</div>
                  <div>SIZE M</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between mt-20 font-bold max-md:mt-10">
                <div className="text-lg leading-8 text-stone-300">
                  Rp. 325.000
                </div>
                <div className="justify-center px-7 py-0.5 text-base leading-7 whitespace-nowrap bg-lime-400 rounded-md text-neutral-50 max-md:px-5">
                  Finish
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-3 mt-5 max-w-full rounded-md border border-solid border-neutral-200 w-[745px]">
        <div className="justify-between max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3 justify-between text-lg leading-8 text-neutral-900 max-md:mt-10">
                <img
                  loading="lazy"
                  src={process.env.PUBLIC_URL + "/img/detailImg.png"}
                  className="shrink-0 max-w-full aspect-[1.04] w-[149px]"
                />
                <div className="flex flex-col justify-between self-start">
                  <div className="font-bold">Sportline Running V2</div>
                  <div>SIZE M</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between mt-20 font-bold max-md:mt-10">
                <div className="self-center text-lg leading-8 text-stone-300">
                  Rp. 325.000
                </div>
                <div className="justify-center px-6 py-0.5 text-base leading-7 text-lime-400 rounded-md border border-lime-400 border-solid max-md:px-5">
                  On The Way
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
