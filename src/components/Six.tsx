
import  { useEffect } from 'react'
import {  motion, stagger, useAnimate } from "motion/react"


const Six = () => {
    const [scope, animate] = useAnimate()
    const text = "Nirvana Tech Fest 2025  "
    const subheading = "Tech Geeks Club, in collaboration with the School of Computing, is organizing Nirvana Tech Fest 2025 on October 17 and 18. This two-day event will bring together students from various schools and colleges to celebrate technology, creativity, and innovation.";
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
        await animate(".btn1", {
            opacity: 1,
            y: 0
        }, {
            duration: 0.3,
        })
        await animate("path", {
            opacity: 1,
            pathLength: 1
        }, {
            duration: 0.8
        })
        animate(".photo", {
            opacity: 1,
            scale: 1,
            x: 0
            ,
        }, {
            duration: 0.4,
            ease: "easeInOut"
        })

    }
    useEffect(() => {
        startAnimating()
    }, [])
    return (
        <div
            ref={scope} className='flex flex-col h-full justify-between  mx-auto font-geist  '>
            <motion.nav
                initial={{
                    opacity: 0,
                    y: -100
                }}
                className='nav flex justify-between items-center max-w-4xl mx-auto mt-4 bg-white w-full  p-[4px] px-2 rounded-2xl

            shadow-[0_84.76px_24.09px_0_rgba(255,103,92,0),0_54.42px_21.41px_0_rgba(255,103,92,0.01),0_30.33px_18.74px_0_rgba(255,103,92,0.03),0_13.38px_13.38px_0_rgba(255,103,92,0.04),0_3.57px_7.14px_0_rgba(255,103,92,0.05)]
            '>
                <div>
                    <motion.img src="/logo_color.png"
                        initial={{
                            opacity: 0,
                        }}
                        width={20}
                        className='w-20 h-16'
                        alt="logo" />
                </div>
                <div className='flex gap-11'>
                    <div className='flex items-center gap-7 text-[14.5px] font-normal cursor-pointer '>
                        <motion.span initial={{ y: -20, opacity: 0 }} className='inline-block nab'>Home</motion.span>
                        <motion.span initial={{ y: -20, opacity: 0 }} className='inline-block nab' >Events</motion.span>
                        <motion.span initial={{ y: -20, opacity: 0 }} className='inline-block nab'>Workshop</motion.span>
                    </div>
                    <button className=' text-white max-w-sm py-2 px-6 rounded-xl bg-[#68BBFF]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(65,157,234,0.4),0px_7.14px_17.84px_0_rgba(79,160,227,0.45)]'>
                        Register Now
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
                <div className=" text-white w-fit px-[12px]   py-[2px] rounded-full bg-[#68BBFF]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(65,157,234,0.4),0px_7.14px_17.84px_0_rgba(79,160,227,0.45)] text-[12px]">TG</div>
                <span className='text-[#402926] px-2 py1 font-semibold tracking-tight text-[12px]'>Nirvana 2.0</span>

            </motion.div>
            <div
                className='title mt-6 z-10 text-[#262E40] text-[55px] leading-14  font-semibold tracking-tight text-center max-w-3xl mx-auto'>
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
            <div className='mt-4 text-[18px] text-[#263340] z-10 opacity-70 leading-5 tracking-tight max-w-xl text-center font-medium mx-auto'>
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

                className='btn1 mt-12 max-w-xl mx-auto flex gap-4 z-10'>

                <motion.button initial={{ opacity: 0, y: 10 }} className='btn1 text-white max-w-sm py-2  rounded-xl px-18 bg-[#68BBFF]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(65,157,234,0.4),0px_7.14px_17.84px_0_rgba(79,160,227,0.45)]'>
                    Events
                </motion.button>
            </motion.div>
            <div className='mx-auto absolute  top-96 left-[57vh] mt-6 '>
                <motion.svg width="707" height="164" viewBox="0 0 707 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} d="M363.223 22.6776V22.6776C361.71 46.6719 380.815 66.9382 404.857 66.8426L651.717 65.8607C680.36 65.7467 702.647 90.72 699.287 119.166L695.039 155.136" stroke="#0A4FE5" stroke-opacity="0.4" stroke-width="2.98189" />
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} d="M357.708 25L357.708 22.5L357.708 138.5" stroke="#0A4FE5" stroke-opacity="0.4" stroke-width="2.98189" />
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} d="M352.33 21.9916L352.142 24.9673C350.558 50.1018 329.711 69.6764 304.527 69.6764L57.7597 69.6765C31.0876 69.6765 12.0618 95.5366 19.9999 121V121" stroke="#0A4FE5" stroke-opacity="0.4" stroke-width="2.98189" />
                </motion.svg>
                <div className='absolute -left-40 top-[120px]'>
                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        className='photo w-xs bg-white min-h-[19rem] rounded-xl
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
        p-6 flex flex-col'>
                        <h2 className="font-bold text-[14px]">School Level Events</h2>
                        <p className="text-neutral-400 mt-2 text-[10px] ">
                            Science Exhibition,Coding Competition.Workshop <br /> and much more
                        </p>

                        <div className="bg-gray-100 flex-1 mt-4 rounded-lg  border border-dashed border-neutral-200 relative flex flex-col w-[280px]">
                            <div className="flex">
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school1.JPG" />
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school2.JPG" />
                            </div>
                            <div className="flex">
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school2.JPG" />
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school4.JPG" />
                            </div>

                        </div>
                        <div className='relative mt-2 bg-gradient-to-r from-[#68bbff2d] to-[#9acef823] text-sky-300 rounded-xl text-center py-1 '>
                            <a href="/event">
                                <span className='aboslute text-[12px] cursor-pointer'>Learn More</span></a>
                        </div>
                    </motion.div>

                </div>

                <div className='absolute left-[200px] top-[120px]'>
                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        className='photo w-xs bg-white min-h-[19rem] rounded-xl
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
        p-6 flex flex-col'>
                        <h2 className="font-bold text-[14px]">College Level Events</h2>
                        <p className="text-neutral-400 mt-2 text-[10px] ">
                            Science Exhibition,Coding Competition.Workshop <br /> and much more
                        </p>

                        <div className="bg-gray-100 flex-1 mt-4 rounded-lg  border border-dashed border-neutral-200 relative flex flex-col w-[280px]">
                            <div className="flex">
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school1.JPG" />
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school2.JPG" />
                            </div>
                            <div className="flex">
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school2.JPG" />
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school4.JPG" />
                            </div>

                        </div>
                        <div className='relative mt-2 bg-gradient-to-r from-[#68bbff2d] to-[#9acef823] text-sky-300 rounded-xl text-center py-1 '>
                           <a href="/event" > <span className='aboslute text-[12px] cursor-pointer'>Learn More</span></a>
                        </div>
                    </motion.div>

                </div>
                <div className='absolute  left-[600px] top-[120px]'>
                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        className='photo w-xs bg-white min-h-[19rem] rounded-xl
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
        p-6 flex flex-col'>
                        <h2 className="font-bold text-[14px]">Outdoor Events</h2>
                        <p className="text-neutral-400 mt-2 text-[10px] ">
                            Science Exhibition,Coding Competition.Workshop <br /> and much more
                        </p>

                        <div className="bg-gray-100 flex-1 mt-4 rounded-lg  border border-dashed border-neutral-200 relative flex flex-col w-[280px]">
                            <div className="flex">
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school1.JPG" />
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school2.JPG" />
                            </div>
                            <div className="flex">
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school2.JPG" />
                                <img className="large rounded-md w-[140px] hover:scale-125 transition duraiton-300" src="/school4.JPG" />
                            </div>

                        </div>
                        <div className='relative mt-2 bg-gradient-to-r from-[#68bbff2d] to-[#9acef823] text-sky-300 rounded-xl text-center py-1 '>
                             <a href="/event" > <span className='aboslute text-[12px] cursor-pointer'>Learn More</span></a>    </div>
                    </motion.div>

                </div>
            </div>
            {/* <div className='absolute overflow-hidden z-0 s bottom-0'>
                 <img className='z-0 opacity-80 w-screen h-svh ' src="/bg.png" alt='bg' />
            </div> */}


            <section className="w-full mt-[480px]">
                <div
                    className="relative w-full h-[300px] md:h-[380px] lg:h-[460px] bg-center bg-cover"

                >
                    {/* dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 h-full flex flex-col justify-center items-center text-center text-white">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Highlights</h2>
                        <p className="mt-2 max-w-2xl text-sm sm:text-base text-[white/90]">
                            A glimpse of the energy, projects and moments from previous editions — workshops, competitions,
                            and celebrations that make Nirvana Tech Fest special.
                        </p>

                        <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            <a href="/event" className="bg-white/10 rounded-lg p-3 flex flex-col items-center cursor-pointer">
                                <img src="/school1.JPG" alt="h1" className="w-full h-28 object-cover rounded-md" />
                                <h4 className="mt-3 text-sm font-semibold">Workshops</h4>
                                <p className="text-xs text-white/80 mt-1">Hands-on sessions & trainer-led labs.</p>
                            </a>
                            <a href="/event" className="bg-white/10 rounded-lg p-3 flex flex-col items-center cursor-pointer">
                                <img src="/school2.JPG" alt="h2" className="w-full h-28 object-cover rounded-md" />
                                <h4 className="mt-3 text-sm font-semibold">Hackathons</h4>
                                <p className="text-xs text-white/80 mt-1">Teams building solutions under pressure.</p>
                            </a>
                            <a href='event' className="bg-white/10 rounded-lg p-3 flex flex-col items-center">
                                <img src="/school4.JPG" alt="h3" className="w-full h-28 object-cover rounded-md" />
                                <h4 className="mt-3 text-sm font-semibold">DJ Night</h4>
                                <p className="text-xs text-white/80 mt-1">Celebration, music and networking after sunset.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Six


