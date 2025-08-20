import './App.css'
import { motion } from "motion/react"
import First from './components/First'
import { Second } from './components/second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Six from './components/Six'
function App() {


  return (
    <>
      <div className="bg-gradient-to-b from-[#ffede9] to-[#fce1df] min-h-screen font-inter  rounded-xl ">
      <Six />
      </div>

    </>
  )
}

export default App



const load = ()=>{
  return <div>
    helo
  </div>
}

