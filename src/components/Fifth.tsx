import { animate } from "motion"
import { motion, useAnimate, type AnimationSequence } from "motion/react"
import { useState } from "react"
const Fifth = () => {
    const [scope, animate] = useAnimate()
    const [isAnimating, setIsAnimating] = useState(false)
    const sequence:AnimationSequence = [
        [".loader", {opacity: [0,1],width: "2rem",},{duration: 0.1 }],
        [".loader", {opacity: 1,width: "2rem", }, {duration: 0.1 }],
        [".loader", {rotate: 360 * 4}, {duration: 2}],
        [".loader", {opacity: [1,0]}, { duration: 0.2}],
        [".text", {display: "none"},{duration: 0.1,ease: "easeInOut"}],
        ["button", {width: "5rem",borderRadius: "1000px",}, { duration: 0.3,ease: "easeInOut" }],
        ["button", {opacity: 1,scale: [1, 1.2, 0.8, 1,],background: "linear-gradient(to right, #22c55e,#22c55e,#22c55e)" }, {duration: 0.8 }],
        [".check-icon", {opacity: [0,1], }, {duration: 0.1}], [".check-icon path", { pathLength: 1}, {duration: 0.3},]
    ]
    const startAnimation = async () => {
        console.log("button clicked")
        if (isAnimating) return
        setIsAnimating(true)
        animate(sequence)
        setIsAnimating(false)
    }
    return (
        <div className="relative w-full h-20 flex items-center justify-center"
            ref={scope}>
            <motion.button
                onClick={startAnimation}
                style={{
                    width: "30rem"
                }}
                className="h-20  rounded-lg flex justify-center items-center bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500
         font-medium cursor-pointer"
            > <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                initial={{ width: "0rem" }}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="loader h-5 w-5 text-white"

            >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3a9 9 0 1 0 9 9" />
                </motion.svg>

                <span
                    className="text cursor-pointer inline-block text-white">Purchase Now ($169)</span>
            </motion.button>


            <motion.svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
                strokeWidth={3}
                className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
                style={{
                    opacity: 0
                }}
                transition={{
                    duration: 0.3,
                    type: "tween",
                    ease: "easeOut"
                }}

            >
                <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="path" d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }} />
            </motion.svg>
        </div>
    )
}

export default Fifth

