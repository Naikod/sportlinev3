import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import CardBody from "../core/cardBody";

export default function BestOfferProduct() {
  const imageControls = useAnimation();
  const cardControls1 = useAnimation();
  const cardControls2 = useAnimation();
  const cardControls3 = useAnimation();

  const [hasScrolled, setHasScrolled] = useState({
    image: false,
    card1: false,
    card2: false,
    card3: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.getElementById("image-section");
      const cardElement1 = document.getElementById("card-section-1");
      const cardElement2 = document.getElementById("card-section-2");
      const cardElement3 = document.getElementById("card-section-3");

      const screenPosition = window.innerHeight * 0.9;

      if (imageElement.getBoundingClientRect().top < screenPosition && !hasScrolled.image) {
        imageControls.start({ opacity: 1, y: 0 });
        setHasScrolled(prev => ({ ...prev, image: true }));
      }
      if (cardElement1.getBoundingClientRect().top < screenPosition && !hasScrolled.card1) {
        cardControls1.start({ opacity: 1, y: 0 });
        setHasScrolled(prev => ({ ...prev, card1: true }));
      }
      if (cardElement2.getBoundingClientRect().top < screenPosition && !hasScrolled.card2) {
        cardControls2.start({ opacity: 1, y: 0 });
        setHasScrolled(prev => ({ ...prev, card2: true }));
      }
      if (cardElement3.getBoundingClientRect().top < screenPosition && !hasScrolled.card3) {
        cardControls3.start({ opacity: 1, y: 0 });
        setHasScrolled(prev => ({ ...prev, card3: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageControls, cardControls1, cardControls2, cardControls3, hasScrolled]);

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="justify-between w-full max-w-[1287px] max-md:max-w-full">
        <motion.div
          id="image-section"
          initial={{ opacity: 0, y: 50 }}
          animate={imageControls}
          transition={{ duration: 0.5 }}
          className="mt-80"
        >
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "/img/Frame 99.png"}
            className="mt-40 max-w-full aspect-[10] w-[635px] max-md:mt-10"
            alt="Frame 99"
          />
          <div className="justify-between mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-28 max-md:flex-col max-md:gap-0">
              <motion.div
                id="card-section-1"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls1}
                transition={{ duration: 0.5 }}
                className="flex flex-col w-[33%]"
              >
                <CardBody />
              </motion.div>
              <motion.div
                id="card-section-2"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls2}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col w-[33%]"
              >
                <CardBody />
              </motion.div>
              <motion.div
                id="card-section-3"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls3}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col w-[33%]"
              >
                <CardBody />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
