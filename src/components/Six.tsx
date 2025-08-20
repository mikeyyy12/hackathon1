import React, { useEffect } from 'react'
import { motion, stagger, useAnimate } from "motion/react"

const Six = () => {
    const [scope, animate] = useAnimate()
    const text = "Cut Support Tickets & Let Customers Edit Orders"
    const subheading = "Let Customers Edit Orders Themselves: Save your customers time and yourself from support email headaches";
    const startAnimating = async () => {
        await animate("nav", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5,
            ease: "easeInOut"
        })
        animate(".nab", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.5,
            delay: stagger(0.1),
            ease: "easeInOut"
        })
        await animate("img", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.2,
            ease: "easeInOut"
        })
        await animate(".pill", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
        }, {
            duration: 0.3,
            ease: "easeInOut"
        })
        await animate(".word", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
        }, {
            duration: 1.4,
            delay: stagger(0.02),
            ease: "easeInOut"
        })
        await animate(".btn button", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.3,
            delay: stagger(0.1)
        })
        animate("path", {
            opacity: 1,
            pathLength: 1
        }, {
            duration: 0.8
        })


    }
    useEffect(() => {
        startAnimating()
    }, [])
    return (
        <div
            ref={scope} className='flex flex-col h-full justify-between  mx-auto font-inter '>
            <motion.nav
                initial={{
                    opacity: 0,
                    y: -100
                }}
                className='nav flex justify-between items-center max-w-4xl mx-auto mt-4 bg-white w-full  p-[10px] rounded-2xl

            shadow-[0_84.76px_24.09px_0_rgba(255,103,92,0),0_54.42px_21.41px_0_rgba(255,103,92,0.01),0_30.33px_18.74px_0_rgba(255,103,92,0.03),0_13.38px_13.38px_0_rgba(255,103,92,0.04),0_3.57px_7.14px_0_rgba(255,103,92,0.05)]
            '>
                <div>
                    <motion.img src="/Frame.png"
                        initial={{
                            opacity: 0,
                        }}
                        width={9}
                        className='w-14 h-7 '
                        alt="logo" />
                </div>
                <div className='flex gap-11'>
                    <div className='flex items-center gap-7 text-[14.5px] font-normal cursor-pointer '>
                        <motion.span initial={{ y: -20, opacity: 0 }} className='inline-block nab'>Home</motion.span>
                        <motion.span initial={{ y: -20, opacity: 0 }} className='inline-block nab' >How it Works</motion.span>
                        <motion.span initial={{ y: -20, opacity: 0 }} className='inline-block nab'>Resource</motion.span>
                    </div>
                    <button className=' text-white max-w-sm py-2 px-6 rounded-xl bg-[#ff7a68]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(235,70,48,0.4),0px_7.14px_17.84px_0_rgba(255,94,73,0.45)]'>
                        Install Customizer
                    </button>
                </div>

            </motion.nav>
            <motion.div
                style={{
                    y: -20,
                    opacity: 0,
                    filter: "blur(5px)",
                }} className='pill bg-white flex justify-center items-center h-8 mt-14 max-w-fit rounded-xl mx-auto px-1
              shadow-[0_84.76px_24.09px_0_rgba(255,103,92,0),0_54.42px_21.41px_0_rgba(255,103,92,0.01),0_30.33px_18.74px_0_rgba(255,103,92,0.03),0_13.38px_13.38px_0_rgba(255,103,92,0.04),0_3.57px_7.14px_0_rgba(255,103,92,0.05)]'>
                <div className=" text-white w-fit px-[12px]   py-[2px] rounded-full bg-[#ff7a68]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(235,70,48,0.4),0px_7.14px_17.84px_0_rgba(255,94,73,0.45)] text-[12px]">31%</div>
                <span className='text-[#402926] px-2 py1 font-semibold tracking-tight text-[12px]'>Increased VOI value</span>

            </motion.div>
            <div
                className='title mt-6 z-10 text-[#402926] text-[55px] leading-14  font-semibold tracking-tight text-center max-w-3xl mx-auto'>
                {text.split(" ").map((word, index) => {
                    return <motion.span
                        style={{
                            opacity: 0,
                            y: 10,
                            filter: "blur(10px)"
                        }}
                        className='word inline-block px-[2px]' key={index + word}>
                        {word}&nbsp;
                    </motion.span>
                })}
            </div>
            <div className='mt-4 text-[18px] text-[#402926] z-10 opacity-70 leading-5 tracking-tight max-w-xl text-center font-medium mx-auto'>
                {subheading.split(" ").map((word, index) => {
                    return <motion.span
                        style={{
                            opacity: 0,
                            y: 10,
                            filter: "blur(10px)"
                        }}
                        className='word inline-block' key={index + word}>
                        {word} &nbsp;
                    </motion.span>
                })}
            </div>
            <motion.div

                className='btn mt-6 max-w-xl mx-auto flex gap-4 z-10'>
                <motion.button
                    initial={{
                        y: -20,
                        opacity: 0
                    }} className='text-[#FF5E49]  bg-white max-w-sm py-2 px-5 rounded-xl
        shadow-[inset_0px_1.78px_0_0_rgba(255,255,255,0.33),inset_0_-3.16px_1.4px_0_rgba(235,70,48,0.1),inset_0_2.81px_2.91px_0_rgba(255,255,255,0.25),0_1.78px_4.46px_0_rgba(157,64,52,0.2)]'>
                    Get Demo
                </motion.button>
                <motion.button
                    initial={{
                        y: -20,
                        opacity: 0
                    }} className=' text-white max-w-sm py-2 px-5 rounded-xl bg-[#ff7a68]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(235,70,48,0.4),0px_7.14px_17.84px_0_rgba(255,94,73,0.45)]'>
                    Install Customizer
                </motion.button>
            </motion.div>
            <div className='mx-auto  mt-20'>
                <motion.svg width="112" height="200" viewBox="0 0 112 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial={{ opacity: 0, pathLength: 0 }} d="M111.439 85.8814V85.8814C86.9016 85.8814 67.0097 105.773 67.0097 130.311V150.489C67.0097 176.839 45.6491 198.199 19.2995 198.199H0.115557" stroke="#FF5E49" strokeOpacity="0.4" strokeWidth="2.98189" />
                    <motion.path initial={{ opacity: 0, pathLength: 0 }} d="M111.439 85.8806H108.756C85.6998 85.8806 67.0092 67.1901 67.0092 44.1342V44.1342C67.0092 21.0782 48.3187 2.3877 25.2628 2.3877H0.115068" stroke="#FF5E49" strokeOpacity="0.4" strokeWidth="2.98189" />
                </motion.svg>
            </div>
            <div className='absolute overflow-hidden z-0 s bottom-0'>
                 <img className='w-screen h-svh ' src="/bg.png" alt='bg' />
            </div>
        </div>
    )
}

export default Six

function Gradient() {
    return (
        <div>

        </div>
    )
}