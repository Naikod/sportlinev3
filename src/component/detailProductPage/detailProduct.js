import React from 'react'

export default function DetailProduct() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-20 bg-white max-md:px-5">
      <div className="flex gap-4 justify-center self-start mt-12 ml-11 text-4xl font-bold leading-10 whitespace-nowrap text-neutral-900 max-md:mt-10 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f24764d68b067f796363b77541faa4c59dd5563cf13bb34bfa5976198cf54a?"
          className="shrink-0 my-auto aspect-[0.57] fill-neutral-900 w-[19px]"
        />
        <div>Back</div>
      </div>
      <div className="justify-between self-center mt-20 w-full max-w-[1192px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "/img/detailImg.png"}
              className="grow w-full aspect-[0.94] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-between mt-1 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold leading-8 text-lime-700 max-md:max-w-full">
                LIMITED EDITION
              </div>
              <div className="mt-5 text-4xl font-bold leading-10 text-neutral-900 max-md:max-w-full">
                Sportline Running V2
              </div>
              <div className="flex gap-1.5 self-start mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-yellow-400 stroke-[2px] stroke-black w-[26px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-yellow-400 stroke-[2px] stroke-black w-[26px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-yellow-400 stroke-[2px] stroke-black w-[26px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9047250f19b3d92474eeaec197a25eeab52f3e4545b28554caa4f7f9c44e0359?"
                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-yellow-400 stroke-[2px] stroke-black w-[26px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6714a2d96be780850d7572a162aae76b6d0b989e5b4dd70a9da11fac0fdf9d97?"
                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] stroke-[2px] stroke-black w-[26px]"
                />
              </div>
              <div className="mt-12 mb-16 text-xl font-semibold leading-9 text-neutral-900 max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <div className="mt-8 text-3xl font-bold leading-9 text-neutral-900 max-md:max-w-full">
                Rp. 150.000
              </div>
              <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3 justify-between items-start">
                  <div className="shrink-0 px-2 py-6 rounded-md bg-zinc-300 h-[50px] w-[50px]" />
                  <div className="justify-center px-6 py-2 text-3xl font-bold leading-9 text-black whitespace-nowrap rounded-md bg-zinc-300 max-md:px-5">
                    1
                  </div>
                  <div className="flex justify-center items-center self-stretch px-3 py-3.5 rounded-md bg-zinc-300">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3ab58c216dbac60821f096d942a4a40ec91a7e59e3cdb8c53ab5e0472faaa6?"
                      className="border-black border-solid aspect-square border-[3px] stroke-[3px] stroke-black w-[26px]"
                    />
                  </div>
                </div>
                <div className="flex gap-0.5 justify-between px-5 py-2 text-lg font-bold leading-8 bg-lime-300 rounded-md text-neutral-900 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/71b0fec136aa6d02e3e75abbe07d61197ab16d04c9ad796db8fbd4f182e2d850?"
                    className="shrink-0 my-auto aspect-square fill-neutral-900 w-[17px]"
                  />
                  <div className="pt-1">Add to Cart</div>
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
