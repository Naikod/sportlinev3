import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function BenefitLanding() {
  const textControls = useAnimation();
  const imageControls1 = useAnimation();
  const imageControls2 = useAnimation();
  const mainImageControls = useAnimation();

  const [hasScrolledText, setHasScrolledText] = useState(false);
  const [hasScrolledImage1, setHasScrolledImage1] = useState(false);
  const [hasScrolledImage2, setHasScrolledImage2] = useState(false);
  const [hasScrolledMainImage, setHasScrolledMainImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById("text-section");
      const imageElement1 = document.getElementById("image-section-1");
      const imageElement2 = document.getElementById("image-section-2");
      const mainImageElement = document.getElementById("main-image-section");

      const textPosition = textElement.getBoundingClientRect().top;
      const imagePosition1 = imageElement1.getBoundingClientRect().top;
      const imagePosition2 = imageElement2.getBoundingClientRect().top;
      const mainImagePosition = mainImageElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (textPosition < screenPosition && !hasScrolledText) {
        textControls.start({ opacity: 1, x: 0 });
        setHasScrolledText(true);
      }
      if (imagePosition1 < screenPosition && !hasScrolledImage1) {
        imageControls1.start({ opacity: 1, x: 0 });
        setHasScrolledImage1(true);
      }
      if (imagePosition2 < screenPosition && !hasScrolledImage2) {
        imageControls2.start({ opacity: 1, x: 0 });
        setHasScrolledImage2(true);
      }
      if (mainImagePosition < screenPosition && !hasScrolledMainImage) {
        mainImageControls.start({ opacity: 1, x: 0 });
        setHasScrolledMainImage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [textControls, imageControls1, imageControls2, mainImageControls, hasScrolledText, hasScrolledImage1, hasScrolledImage2, hasScrolledMainImage]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center mb-60 px-16 py-20 bg-white max-md:px-5"
      >
        <div className="justify-between mt-60 mb-60 w-full max-w-screen-xl bg-neutral-900 max-md:mt-10 max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <motion.div
              id="text-section"
              initial={{ opacity: 0, x: -50 }}
              animate={textControls}
              transition={{ duration: 1 }}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow justify-between items-center mt-24 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold leading-9 text-center text-white w-[404px]">
                  Sportline: Accelerating Your Dreams, Step by Step!
                </div>
                <div className="mt-1 text-sm font-semibold leading-6 text-center text-white">
                  Step Up to Success - One Stride at a Time!
                </div>
                <div className="justify-center px-10 py-2 mt-3.5 text-sm font-bold leading-6 text-lime-600 bg-white rounded-xl max-md:px-5">
                  SHOP NOW
                </div>
                <div className="justify-between self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
                  <div className="flex max-md:flex-col max-md:gap-0">
                    <motion.div
                      id="image-section-1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={imageControls1}
                      transition={{ duration: 1 }}
                      className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full"
                    >
                      <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/img/g1.png"}
                        className="grow w-full aspect-[1.27]"
                      />
                    </motion.div>
                    <motion.div
                      id="image-section-2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={imageControls2}
                      transition={{ duration: 1 , delay: 0.2 }}
                      className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full"
                    >
                      <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/img/g2.png"}
                        className="grow w-full aspect-[1.3]"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              id="main-image-section"
              initial={{ opacity: 0, x: 50 }}
              animate={mainImageControls}
              transition={{ duration: 1 }}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + "/img/g3.png"}
                className="grow w-full aspect-[1.11] max-md:max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
