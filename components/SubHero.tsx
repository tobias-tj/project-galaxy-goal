"use client"
import React, { useEffect } from "react"
import { FiArrowDown } from "react-icons/fi"
import {animate, motion, useMotionTemplate, useMotionValue} from "framer-motion";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const SubHero = () => {
    const color = useMotionValue(COLORS[2]);
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

    return (
        <div className="flex justify-center relative z-10 flex-col items-center">
            <h2 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                Donde el Sueño de Ser Futbolistas Se Hace Realidad
            </h2>
            <p className="my-6 max-w-xl text-center leading-relaxed md:text-lg md:leading-relaxed">
                En GalaxyGoal, estamos comprometidos a hacer realidad el sueño de jugar fútbol para todos aquellos que alguna vez aspiraron a ser futbolistas. Somos la plataforma que une a fanáticos del fútbol de todas partes, ofreciendo una experiencia única y emocionante que va más allá de simplemente jugar.
            </p>
            <motion.button
            whileHover={{
                scale: 1.015,
            }}
            style={{
                border,
                boxShadow,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50">
                ¿Por qué GalaxyGoal?
                <FiArrowDown className="transition-transform group-hover:-rotate-45"/>
            </motion.button>

        </div>
    )
}

export default SubHero