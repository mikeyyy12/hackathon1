import { useAnimate ,motion, stagger} from 'motion/react'
import React, { useEffect } from 'react'

const Fourth = () => {
    const [scope,animate] = useAnimate();
    const text='Do you want me to give you an exact Figma color palette + gradient stops (like hex values and blur amounts) so you can replicate the exact same style as the "Final Results" in your screenshot?'
  useEffect(()=>{
startAnimating();
  },[])

  const startAnimating=()=>{
    animate("span",{
        y:0,
        filter:"blur(0px)",
        opacity:1
    },
{

    duration:0.6,
    ease:"easeInOut",
    delay:stagger(0.05)
})
  }
    return (
    <div ref={scope}
    className='text-white max-w-4xl mx-auto font-bold text-4xl'>
       {/* <motion.span
       style={{
        y:-100,
        opacity:0,
       }}
       className='inline-block'
       >
        {text}
       </motion.span> */}
       {text.split(" ").map((word,index)=>(
        <motion.span
        key={index+word}
        style={{
            opacity:0,
            filter:"blur(5px)",
            y:10,
        }}
        className='inline-block'
        >
            {word} &nbsp;
        </motion.span>
       ))}
    </div>
  )
}

export default Fourth