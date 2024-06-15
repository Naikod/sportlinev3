import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import CardBody from "../core/cardBody";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Landing() {
  const [limitedProduct, setLimitedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setLimitedProduct(
        response.data
          .filter((item) => item.category.includes("Limited") && item.stock > 0)
          .slice(0, 3)
      );
      setIsLoading(false);
      // console.log(response.data.filter(item => item.category.includes("Limited")).slice(0, 3))
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Start text and image animations when component mounts
    textControls.start({ opacity: 1, x: 0 });
    imageControls.start({ opacity: 1, x: 0 });

    const handleScroll = () => {
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    textControls,
    imageControls,
  ]);

  const navigate = useNavigate();
  const shop = () => {
    navigate("/detail");
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5"
      >
        <div className="justify-between mt-60 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <motion.div
              id="text-section"
              initial={{ opacity: 0, x: -50 }}
              animate={textControls}
              transition={{ duration: 2, delay: 0.5 }}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col justify-between self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold leading-[83px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
                  PERFECT TIME TO BE HEALTHY
                </div>
                <div className="mt-7 leading-7 text-neutral-400 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="flex gap-2.5 justify-between self-start mt-12 leading-[170%] max-md:mt-10">
                  <div
                    onClick={shop}
                    className="justify-center px-6 py-2.5 text-white rounded-full bg-neutral-900 max-md:px-5 hover: cursor-pointer"
                  >
                    Shop Now
                  </div>
                  <div className="justify-center px-6 py-2.5 rounded-full border border-solid border-neutral-900 text-neutral-900 max-md:px-5">
                    Contact Us
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              id="image-section"
              initial={{ opacity: 0, x: 50 }}
              animate={imageControls}
              transition={{ duration: 1 }}
              className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
            >
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + "/img/Group.png"}
                className="grow w-full aspect-[1.61] max-md:mt-10 max-md:max-w-full"
                alt="Group"
              />
            </motion.div>
          </div>

          <motion.div
            id="card-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-80"
          >
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "/img/Frame 98.png"}
              className="mt-40 max-w-full aspect-[11.11] w-[642px] max-md:mt-10"
              alt="Frame"
            />
            <div className="justify-between mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-28 max-md:flex-col max-md:gap-0">
                {isLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    <div className="flex flex-col w-[33%]">
                      <CardBody
                        images={limitedProduct[0].images}
                        title={limitedProduct[0].name}
                        description={limitedProduct[0].description}
                        stock={limitedProduct[0].stock}
                        id={limitedProduct[0]._id}
                      />
                    </div>
                    <div className="flex flex-col w-[33%]">
                      <CardBody
                        images={limitedProduct[1].images}
                        title={limitedProduct[1].name}
                        description={limitedProduct[1].description}
                        stock={limitedProduct[1].stock}
                        id={limitedProduct[1]._id}
                      />
                    </div>
                    <div className="flex flex-col w-[33%]">
                      <CardBody
                        images={limitedProduct[2].images}
                        title={limitedProduct[2].name}
                        description={limitedProduct[2].description}
                        stock={limitedProduct[2].stock}
                        id={limitedProduct[2]._id}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
