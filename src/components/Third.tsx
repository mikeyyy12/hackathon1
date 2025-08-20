import { CirclePlus, CrossIcon, FanIcon, Globe, MessageCircleMore, MessageCircleMoreIcon, MessageSquareIcon, PlusIcon, SpaceIcon, TimerIcon, X } from "lucide-react"
import { AnimatePresence, motion } from 'motion/react'
import { useState } from "react"

const Third = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <AnimatePresence>
                {open &&

                    (


                        <motion.div exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: 'blur(10px)'
                        }}
                            initial={{
                                opacity: 0,
                                scale: 0,
                                filter: 'blur(10px)'
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: 'blur(0px)'
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }} className='w-72 bg-white min-h-[28rem] rounded-xl
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
        p-6 flex flex-col'>
                            <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
                            <p className="text-neutral-400 mt-2 text-[8px] ">
                                A collection of beautiful UI components, let's get on with it.
                            </p>
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() => {
                                        setOpen(false)
                                    }}
                                    className="flex items-cneter cursor-pointer gap-1 text-[10px] mt-4
     shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
     rounded-lg px-2 py-1
       ">
                                    <img
                                        width={50}
                                        height={50}
                                        className="h-4 w-4"
                                        src="/vite.svg" />{" "}
                                    Aceternity
                                    {" "}
                                    <X
                                        className="h-3 w-3 text-neutral-400" />
                                </button>
                            </div>
                            <div

                                className="bg-gray-100 flex-1 mt-4 rounded-lg  border border-dashed border-neutral-200 relative">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.98,
                                        filter: "blur(10px)"
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        scale: 1.05,
                                        filter: "blur(0px)"
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 rounded-lg w-full bg-white divide-y border border-neutral-200 divide-neutral-200">
                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br
                          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                          bg-white rounded-md flex items-center justify-center
  ">
                                            <MessageCircleMoreIcon className="h-4 w-4 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[8px] font-bold text-neutral-600">
                                                Acertinity UI Components
                                            </p>
                                            <p className="text-neutral-400 text-[8px] mt-1">
                                                A collection of UI components
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br
                          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                          bg-white rounded-md flex items-center justify-center
  ">
                                            <TimerIcon className="h-4 w-4 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[8px] font-bold text-neutral-600">
                                                Acertinity UI Components
                                            </p>
                                            <p className="text-neutral-400 text-[8px] mt-1">
                                                A collection of UI components
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br
                          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                          bg-white rounded-md flex items-center justify-center
  ">
                                            <Globe className="h-4 w-4 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[8px] font-bold text-neutral-600">
                                                Acertinity UI Components
                                            </p>
                                            <p className="text-neutral-400 text-[8px] mt-1">
                                                A collection of UI components
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br
                          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                          bg-white rounded-md flex items-center justify-center
  ">
                                            <FanIcon className="h-4 w-4 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[8px] font-bold text-neutral-600">
                                                Acertinity UI Components
                                            </p>
                                            <p className="text-neutral-400 text-[8px] mt-1">
                                                A collection of UI components
                                            </p>
                                        </div>
                                    </div><div className="flex items-center justify-center gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br
                          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                          bg-white rounded-full flex items-center justify-center
  ">
                                            <PlusIcon className="h-4 w-4 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">

                                            <p className="text-neutral-400 text-[8px] mt-1">
                                                Create Project
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>


                    )}
            </AnimatePresence>
        </>
    )
}

export default Third