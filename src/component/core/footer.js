import React, { Component } from 'react'
import {motion} from 'framer-motion'

export default class Footer extends Component {
  render() {
    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ duration: 1, ease: "easeOut", delay: 2}}
      >

      <div className='pt-10 mt-60'>
        <div className="px-20 pt-11 pb-2 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
            <div className="text-3xl font-extrabold">Sportline</div>
            <img 
              alt='' 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0309d91d0a297561d685cff8fd053655872a85d4bb2279ec37d85c8778e1bdf1?"
              className="mt-1 max-w-full border border-white border-solid aspect-[100] stroke-[1px] stroke-white w-[149px]"
              />
            <div className="mt-4 text-base font-semibold">
              Your Game Plan Starts Here!
             </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-1 max-md:mt-10 max-md:max-w-full">
            <div className="self-end max-w-full w-[598px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[49%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-xs text-white max-md:mt-10">
                    <div className="flex flex-col items-start pr-10 pl-3 text-xl font-semibold whitespace-nowrap max-md:pr-5">
                      <div>Product</div>
                      <img 
                        alt='' 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/57d1007aa25b021cea0c8ae4855d76a3f478ce4c431c7c5c5e8404781f18e292?"
                        className="mt-1 border border-lime-600 border-solid aspect-[100] stroke-[1px] stroke-lime-600 w-[78px]"
                        />
                    </div>
                    <div className="mt-6">Sepatu Basket</div>
                    <div className="mt-8">Sepatu Running</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-xs text-white whitespace-nowrap max-md:mt-10">
                    <div className="text-xl font-semibold">Link</div>
                    <img 
                      alt='' 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7014d9f0c03242d5c88d8baf05c7037b103ec572e36cf97d16f55dc48383b6a?"
                      className="mt-1 border border-lime-600 border-solid aspect-[33.33] stroke-[1px] stroke-lime-600 w-[35px]"
                      />
                    <div className="mt-7">Home</div>
                    <div className="mt-9">About</div>
                    <div className="mt-9">Product</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-xs text-white whitespace-nowrap max-md:mt-10">
                    <div className="text-xl font-semibold">Contact</div>
                    <img 
                      alt='' 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0fce97958cbfb1d7a27a2babc07b94958bd60c04609cdc0510da326daff457?"
                      className="self-center mt-1 border border-lime-600 border-solid aspect-[100] stroke-[1px] stroke-lime-600 w-[89px]"
                      />
                    <div className="flex gap-2 mt-5">
                      <img 
                        alt='' 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/21fafe2a2d99414ffbb2bde8d71b1f574ce82785fcafcf7960ca9749f45707cb?"
                        className="shrink-0 aspect-square w-[19px]"
                        />
                      <div className="my-auto">Whatsapp</div>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <img 
                        alt='' 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8c419070135f66dfa0fd58d8be4ff8adfe427986b0cf3f13a02dc89ccf7266d?"
                        className="shrink-0 aspect-square w-[19px]"
                        />
                      <div>Instagram</div>
                    </div>
                    <div className="flex gap-2 mt-7">
                      <img 
                        alt='' 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/57f93055ea7cc702568749db3673a32f35e3ae8914b4c469373b2eb4be0325a0?"
                        className="shrink-0 aspect-square w-[19px]"
                        />
                      <div className="my-auto">Linkedin</div>
                    </div>
                    <div className="flex gap-2 mt-7">
                      <img 
                        alt='' 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2308064519679778ee5bc39cd5f8048f4eaa7efcd8fdcb5115a40a2271942961?"
                        className="shrink-0 aspect-square w-[19px]"
                        />
                      <div className="my-auto">Github</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-sm font-semibold text-white max-md:mt-10 max-md:max-w-full">
              Copyright©2024 All rights reserved | Made by naiko, rvldrh, &
              shiva
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
                        </motion.div>
    )
  }
} 
