// import React from "react"
import React from "react"
// import confetti from "https://esm.sh/canvas-confetti@1.6.0"
// import ReactDom from "https://esm.sh/react-dom@18.2.0"
// import './code.css';

const Component1 = () => {
  function onMouseMove(e) {
    // confetti({
    //   particleCount: 5,
    //   origin: {
    //     x: e.pageX / window.innerWidth,
    //     y: (e.pageY + 20) / window.innerHeight,
    //   }
    // })
  }

  return (
    <div onMouseMove={onMouseMove}>
      <h1>Hello React! ⚛️</h1>
      <p>Building user interfaces.</p>
    </div>
  )
}

export default Component1
