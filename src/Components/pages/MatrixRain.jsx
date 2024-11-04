import React, { useEffect } from "react";

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById("c");
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for non-transparent canvas

    // Adjust canvas size to actual viewport
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Pre-calculate and cache values
    const characters = "0101ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ".split("");
    const charLength = characters.length;
    const font_size = 15;
    const columns = Math.floor(canvas.width / font_size / 7);
    const drops = new Float32Array(columns); // Use typed array for better performance

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height / font_size;
    }

    // Pre-set canvas font to avoid setting it in animation loop
    ctx.font = font_size + "px arial";
    
    // Create off-screen canvas for better performance
    const offCanvas = new OffscreenCanvas(canvas.width, canvas.height);
    const offCtx = offCanvas.getContext("2d", { alpha: false });
    offCtx.font = ctx.font;

    function draw() {
      // Clear canvas with opacity
      offCtx.fillStyle = "rgba(0, 0, 0, 0.04)";
      offCtx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color once
      offCtx.fillStyle = "#0F83";

      // Draw characters
      for (let i = 0; i < columns; i++) {
        const text = characters[Math.floor(Math.random() * charLength)];
        const x = i * font_size;
        const y = drops[i] * font_size;
        
        offCtx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }

      // Copy off-screen canvas to main canvas
      ctx.drawImage(offCanvas, 0, 0);
    }

    // Use requestAnimationFrame instead of setInterval for smoother animation
    let animationId;
    let lastDraw = 0;
    const fps = 30; // Limit FPS to reduce resource usage
    const interval = 1000 / fps;

    function animate(timestamp) {
      animationId = requestAnimationFrame(animate);
      
      const delta = timestamp - lastDraw;
      
      if (delta > interval) {
        lastDraw = timestamp - (delta % interval);
        draw();
      }
    }

    animationId = requestAnimationFrame(animate);

    // Clean up function
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      id="c"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default MatrixRain;
