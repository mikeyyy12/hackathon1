
import React from 'react'
import {motion} from "motion/react"
const First = () => {
  return (
    <div>
        <div className='w-full h-screen mx-auto bg-neutral-900 flex items-center justify-center'
 style={{
  backgroundImage: 'radial-gradient(circle at 0.5px 0.5px , rgba(6,182,212,0.2) 0.5px, transparent 0)',
  backgroundSize:'8px 8px',
  backgroundRepeat:"repeat"
 }}>
<motion.button
whileHover={{
  rotateX:25,
  rotateY:10,
  boxShadow:"0px 20px 50px  rgba(8,112,184,0.7)",
}}
initial={{
  rotate:0
}}
style={{
  translateZ:100,
}}
transition={{
  duration:0.4,
  ease:"easeInOut"
}}
className='group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>
  <span className='group-hover:text-cyan-500 transition-colors duration-300'>Subscribe</span>
  <span className='absolute  inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
    <span className='absolute  opacity-0 group-hover:opacity-100  inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-1 blur-sm w-full mx-auto'></span>
</motion.button>
 </div>
    </div>
  )
}

export default First