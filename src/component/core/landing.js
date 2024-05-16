    import React, { useEffect, useState } from "react";
    import { motion, useAnimation } from "framer-motion";
    import CardBody from "./cardBody";

    export default function Landing() {
    const textControls = useAnimation();
    const imageControls = useAnimation();
    const cardControls = useAnimation();
    
    const [hasScrolledText, setHasScrolledText] = useState(false);
    const [hasScrolledImage, setHasScrolledImage] = useState(false);
    const [hasScrolledCards, setHasScrolledCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const textElement = document.getElementById("text-section");
        const imageElement = document.getElementById("image-section");
        const cardElement = document.getElementById("card-section");

        const textPosition = textElement.getBoundingClientRect().top;
        const imagePosition = imageElement.getBoundingClientRect().top;
        const cardPosition = cardElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (textPosition < screenPosition && !hasScrolledText) {
            textControls.start({ opacity: 1, x: 0 });
            setHasScrolledText(true);
        }
        if (imagePosition < screenPosition && !hasScrolledImage) {
            imageControls.start({ opacity: 1, x: 0 });
            setHasScrolledImage(true);
        }
        if (cardPosition < screenPosition && !hasScrolledCards) {
            cardControls.start({ opacity: 1, y: 0 });
            setHasScrolledCards(true);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [textControls, imageControls, cardControls, hasScrolledText, hasScrolledImage, hasScrolledCards]);

    return (
        <div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5"
        >
            <div className="justify-between mt-60 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <motion.div
                id="text-section"
                initial={{ opacity: 0, x: -50 }}
                animate={textControls}
                transition={{ duration: 2 }}
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
                    <div className="justify-center px-6 py-2.5 text-white rounded-full bg-neutral-900 max-md:px-5">
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
                animate={cardControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-80"
            >
                <img
                loading="lazy"
                src={process.env.PUBLIC_URL + "/img/Frame 98.png"}
                className="mt-40 max-w-full aspect-[11.11] w-[642px] max-md:mt-10"
                alt="Frame"
                />
                <motion.div
                id="card-section"
                initial={{ opacity: 0, y: 50 }}
                animate={cardControls}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="justify-between mt-12 max-md:mt-10 max-md:max-w-full"
            >
                <div className="flex gap-28 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%]">
                    <CardBody />
                </div>
                <div className="flex flex-col w-[33%]">
                    <CardBody />
                </div>
                <div className="flex flex-col w-[33%]">
                    <CardBody />
                </div>
                </div>
            </motion.div>
            </motion.div>
            </div>
        </motion.div>
        </div>
    );
    }
