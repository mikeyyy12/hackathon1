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




const SaaSDashboardIllustration = () => {
  return (
    <svg
      width="1200"
      height="800"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#C3B4FF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#A7E0FF", stopOpacity: 1 }} />
        </linearGradient>

        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="15"
            floodColor="#949494"
            floodOpacity="0.15"
          />
        </filter>

        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="4" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComposite in2="offsetblur" operator="arithmetic" k2="-1" k3="1" />
          <feFlood floodColor="black" floodOpacity="0.2" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="100"
        y="80"
        rx="40"
        ry="40"
        width="1000"
        height="640"
        fill="white"
        filter="url(#softShadow)"
      />

      <rect
        x="120"
        y="100"
        rx="20"
        ry="20"
        width="960"
        height="80"
        fill="url(#grad1)"
        filter="url(#softShadow)"
      />

      <rect
        x="120"
        y="200"
        rx="25"
        ry="25"
        width="220"
        height="500"
        fill="white"
        filter="url(#softShadow)"
      />

      <rect
        x="360"
        y="200"
        rx="30"
        ry="30"
        width="700"
        height="500"
        fill="white"
        filter="url(#softShadow)"
      />

      <circle
        cx="650"
        cy="420"
        r="100"
        fill="url(#grad1)"
        filter="url(#softShadow)"
      />

      <circle cx="650" cy="420" r="130" fill="url(#grad1)" opacity="0.15" />

      <rect
        x="400"
        y="600"
        rx="15"
        ry="15"
        width="300"
        height="50"
        fill="white"
        filter="url(#innerShadow)"
      />
    </svg>
  );
};


