import React, { useEffect } from "react";

const MatrixRain = () => {
  useEffect(() => {
    // get the canvas element and its context
    const canvas = document.getElementById("c");
    const ctx = canvas.getContext("2d");

    // making the canvas full screen
    canvas.height = window.innerHeight * 5;
    canvas.width = window.innerWidth;

    // characters to display
    const matrix = "0101ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ";
    const characters = matrix.split("");

    const font_size = 15;
    const columns = canvas.width / font_size / 7;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height;
    }

    // Function to reset the drops array
    function resetDrops() {
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * canvas.height;
      }
    }

    // Reset the drops array every 25 seconds
    setInterval(resetDrops, 10000);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F83"; // green matrix text color is: #0F0
      ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 150);

    return () => {
      clearInterval(intervalId); // Clear the interval on unmount
    };
  }, []);

  return (
    <canvas
      id="c"
      style={{
        display: "block",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default MatrixRain;

// Add the CSS styles here as well
const styles = `
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
