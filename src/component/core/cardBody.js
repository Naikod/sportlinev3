import React from "react";

export default function CardBody() {
  return (
    <div>
      <div className="flex flex-col justify-between border border-solid border-stone-300 max-w-[304px]">
        <div className="flex overflow-hidden relative flex-col items-end pt-1.5 pr-1.5 pb-20 pl-16 w-full aspect-[1.03]">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "/img/cardImg.png"}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-2 justify-between mb-32">
            <div className="shrink-0 ml-px w-6 h-6 rounded-full bg-stone-300" />
            <div className="shrink-0 w-6 h-6 bg-lime-200 rounded-full" />
          </div>
        </div>
        <div className="self-start text-xl font-bold leading-9 text-black">
          Sportline Running V2
        </div>
        <div className="self-start text-sm leading-6 text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="flex gap-5 justify-between pr-1 pl-px mt-4 w-full">
          <div className="flex flex-col justify-center text-sm font-bold leading-6 text-white bg-neutral-900">
            <div className="flex gap-1 p-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de912fa2fb97a6165555e3bd3d0d8fc2ab37d58447ba7b25212313e4cfec633d?"
                className="shrink-0 aspect-[1.03] w-[29px]"
              />
              <div className="my-auto">BUY NOW</div>
            </div>
          </div>
          <div className="text-xl font-semibold leading-9 text-black">
            197 Left
          </div>
        </div>
      </div>
    </div>
  );
}
