import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CardBody from '../core/cardBody';

export default function BestOfferProduct() {
  const imageControls = useAnimation();
  const cardControls1 = useAnimation();
  const cardControls2 = useAnimation();
  const cardControls3 = useAnimation();

  const [hasScrolledImage, setHasScrolledImage] = useState(false);
  const [hasScrolledCard1, setHasScrolledCard1] = useState(false);
  const [hasScrolledCard2, setHasScrolledCard2] = useState(false);
  const [hasScrolledCard3, setHasScrolledCard3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.getElementById("image-section");
      const cardElement1 = document.getElementById("card-section-1");
      const cardElement2 = document.getElementById("card-section-2");
      const cardElement3 = document.getElementById("card-section-3");

      const imagePosition = imageElement.getBoundingClientRect().top;
      const cardPosition1 = cardElement1.getBoundingClientRect().top;
      const cardPosition2 = cardElement2.getBoundingClientRect().top;
      const cardPosition3 = cardElement3.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (imagePosition < screenPosition && !hasScrolledImage) {
        imageControls.start({ opacity: 1, x: 0 });
        setHasScrolledImage(true);
      }
      if (cardPosition1 < screenPosition && !hasScrolledCard1) {
        cardControls1.start({ opacity: 1, y: 0 });
        setHasScrolledCard1(true);
      }
      if (cardPosition2 < screenPosition && !hasScrolledCard2) {
        cardControls2.start({ opacity: 1, y: 0 });
        setHasScrolledCard2(true);
      }
      if (cardPosition3 < screenPosition && !hasScrolledCard3) {
        cardControls3.start({ opacity: 1, y: 0 });
        setHasScrolledCard3(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageControls, cardControls1, cardControls2, cardControls3, hasScrolledImage, hasScrolledCard1, hasScrolledCard2, hasScrolledCard3]);

  return (
    <div>
      <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
        <div className="justify-between mt-60 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
          <motion.div
            id="image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={imageControls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "/img/Frame 99.png"}
              className="mt-40 max-w-full aspect-[10] w-[635px] max-md:mt-10"
            />
          </motion.div>
          <div className="justify-between mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-28 max-md:flex-col max-md:gap-0">
              <motion.div
                id="card-section-1"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls1}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col w-[33%]"
              >
                <CardBody />
              </motion.div>
              <motion.div
                id="card-section-2"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls2}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col w-[33%]"
              >
                <CardBody />
              </motion.div>
              <motion.div
                id="card-section-3"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls3}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col w-[33%]"
              >
                <CardBody />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
