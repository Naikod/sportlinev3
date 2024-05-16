import React from "react";
import CardBody from "./cardBody";

export default function CardGroup() {
  return (
    <div>
      <div className="flex flex-col justify-center px-16 bg-white max-md:px-5">
        <div className="justify-between w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "/img/Frame 98.png"}
            // className="mt-40 max-w-full aspect-[11.11] w-[642px] max-md:mt-10"
          />
          <div className="justify-between mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <CardBody />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <CardBody />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <CardBody />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
