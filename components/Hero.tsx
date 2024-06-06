"use client"
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle
} from "react-icons/ai";
import SubHero from "./SubHero";


const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HeroBody = () => {

    const color = useMotionValue(COLORS[2]);
    const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    return(
        <motion.section
         style={{
           backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
        <div className="relative z-10 flex-col items-center">
            <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                Para los amantes del futbol!
            </span>
            <div className="text-center p-10 py-10">
            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                GalaxyGoal
            </h1>
            <h3 className="font-light py-2 text-white md:text-3xl">
              Es donde estan las estrellas
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              La primera app hecha por fanaticos del futbol paraguayo.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <motion.button
                 whileHover={{
                    scale: 2.015,
                }}
                className="rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-customColor">
                 <AiFillTwitterCircle />
                </motion.button>

                <motion.a
                whileHover={{
                    scale: 2.015,
                }}
                href="https://www.linkedin.com/in/tobias-jara-65956a21a/"
                className="rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-customColor">
                <AiFillLinkedin />
                </motion.a>

                <motion.button
                whileHover={{
                    scale: 2.015,
                }}
                className="rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-customColor">
                <AiFillInstagram />
                </motion.button>

            </div>
            <motion.div className="flex justify-center mt-1.5 py-2 mx-auto bg-gradient-to-b rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src="/logo.png" objectFit="cover" height={350} width={350} alt="logo"/>
            </motion.div>
          </div>

          
        </div>


        <div className="absolute inset-0 z-0">
            <Canvas>
                <Stars radius={50} count={2500} factor={4} fade speed={2}/>
            </Canvas>
        </div>

        <SubHero/>


        </motion.section>
    )
}

export default HeroBody