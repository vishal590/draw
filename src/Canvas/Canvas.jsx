import React, { useEffect, useRef, useState } from "react";

const Canvas = ({ width, height }) => {
  const canvasRef = useRef(null);
  const [circleCordinates, setCircleCordinates] = useState([]);

  function getCursorPos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    console.log("rect:", rect);
    // console.log("bottom", e)
    return {
      left: e.clientX - rect.left,
      top: e.clientY - rect.top,
      right: e.clientX + rect.width,
      bottom: e.clientY + rect.height,
    };
  }

  function getRandomRadius(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomColor() {
    let letters = "0123456789ABCDEF";
    let colors = "#";

    for (let i = 0; i < 6; i++) {
      colors += letters[Math.floor(Math.random() * 16)];
    }

    return colors;
  }

  function isCircleOverlap(cir1, cir2) {
    const collide = !(
        cir1.top > cir2.bottom ||
        cir1.right < cir2.left ||
        cir1.bottom < cir2.top ||
        cir1.left > cir2.right
      );
    
      return collide;
    
  }

  function drawCircle(e) {
    let pos = getCursorPos(canvasRef.current, e);
    let clientX = pos.left;
    let clientY = pos.top;
    let right = pos.right;
    let bottom = pos.bottom;

    // console.log("ClientX:", clientX, clientY);
    console.log("bottom:", pos.bottom, pos.right);

    let radius = getRandomRadius(10, 50);

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

    //   setCircleCordinates((prevState) => {
    //     const current = {
    //       top: clientY,
    //       left: clientX,
    //       right,
    //       bottom,
    //     };

    //     for (let i = 0; i < prevState.length; i++) {
    //         console.log('isCircleOverlap:', isCircleOverlap(current, prevState[i]))
    //       if (isCircleOverlap(current, prevState[i])) {
    //         ctx.fillStyle = "red";
    //       }else{
    //         ctx.fillStyle = randomColor();
    //       }
    //     }

    //     return [...prevState, current];
    //   });

      ctx.fillStyle = randomColor();
      ctx.beginPath();
      ctx.arc(clientX, clientY, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: "1px solid black" }}
        onClick={(e) => drawCircle(e)}
        // className="cust-width"
      />
    </div>
  );
};

export default Canvas;
