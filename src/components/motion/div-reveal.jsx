'use client'

import React from "react"
import { motion } from 'motion/react'

function Reveal({children}){
    return (
        <motion.div initial={{ scale: 0.8, opacity:0 }} animate={{ scale: 1,opacity:1 }}>
            {children}
        </motion.div>
    )
}
function SlideIn({children,delay}){
    return(
        <motion.div initial={{ y:20, opacity:0.5}}  whileInView={{ y:0, opacity:1 }} transition={{duration: 0.15,delay,ease:'linear'}}>
            {children}
        </motion.div>
    )
}
export {
    Reveal, SlideIn
}