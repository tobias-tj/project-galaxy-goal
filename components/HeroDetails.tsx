"use client"
import Image from "next/image"
import React from "react"
import {motion,} from "framer-motion";


const HeroDetails = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center relative z-10 flex-col mt-8 items-center">
        <div className="px-4 bg-gray mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
              <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                  <div className="max-w-xl mb-6">
                    
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Crea tu Equipo
                    </h2>
                    <p className="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
                    </p>
                  </div>
                  <div className='space-x-3'>
                  <button className="text-white text-lg font-medium inline-flex items-center">
                  <span> Mas Informacion →</span>
                  </button>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <img alt="logo" width="220" height="120" src="/splash-screen.png"/>
                  <img alt="logo" width="220" height="120" src="/welcome-screen.png"/>
                  <img alt="logo" width="220" height="120" src="/home-new-user.png"/>
                </div>
              </div>
        </div>




        <div className="px-4 bg-grey mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col space-x-3 items-center justify-between w-full mb-10 lg:flex-row">
            <img alt="logo" width="220" height="120" src="/home-screen.png" />
            <img alt="logo" width="220" height="120" src="/squad-screen-2.png" />
            <img alt="logo" width="220" height="120" src="/squad-screen-3.png" />
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                Empieza a brillar como una estrella
                </h2>
                <p className="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
                </p>
              </div>
              <div className='space-x-4'>
              <button className="text-white  text-lg font-medium inline-flex items-center">
              <span> Mas Informacion →</span>
              </button>
              </div>
            </div>
          </div>
        </div>


        <div className="px-4 bg-grey mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                Puedes crear o participar de eventos
                </h2>
                <p className="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
                </p>
              </div>
              <div className='space-x-4'>
              <button className="text-white  text-lg font-medium inline-flex items-center">
              <span> Mas Informacion →</span>
              </button>
              </div>
            </div>
            <div className="flex space-x-2">
                <img alt="logo" width="220" height="120" src="/torneo1.png"/>
                <img alt="logo" width="220" height="120" src="/tornero2.png"/>
                <img alt="logo" width="220" height="120" src="/partidos.png"/>
            </div>
          </div>
        </div>`
      </motion.div>
    )
}

export default HeroDetails