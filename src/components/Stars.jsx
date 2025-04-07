import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const PARTS = 10;

const Stars = () => {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();
  const starArrayRef = useRef([]);
  const displayPartsRef = useRef([]);
  const animationRef = useRef(null);
  // Add a ref to track the current theme
  const darkModeRef = useRef(isDarkMode);

  // Update the ref whenever isDarkMode changes
  useEffect(() => {
    darkModeRef.current = isDarkMode;
  }, [isDarkMode]);

  // Main canvas setup - runs once
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    starArrayRef.current = [];
    displayPartsRef.current = initDisplayParts(canvas);

    let delay = 30;
    let yPos = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const dy = scrollY - yPos;
      yPos = scrollY;

      displayPartsRef.current.forEach((part) => {
        part.dx = part.dx - (Math.floor(Math.random() * dy * 4) - dy * 2);
        part.dy = part.dy - (Math.floor(Math.random() * dy * 7) - dy * 2);
      });
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (delay === 0) {
        delay = 10;
        spawnStars(starArrayRef.current, canvas);
      }

      // Use the ref value instead of the closed-over value
      drawRects(displayPartsRef.current, ctx, canvas, darkModeRef.current);

      for (let index = starArrayRef.current.length - 1; index >= 0; index--) {
        const star = starArrayRef.current[index];
        star.y += star.dy;
        star.z -= 0.5;

        // Use the ref value here too
        drawStar(
          star,
          ctx,
          canvas,
          displayPartsRef.current,
          darkModeRef.current
        );

        if (
          star.x < 0 ||
          star.x > canvas.width ||
          star.y < 0 ||
          star.y > canvas.height ||
          star.z < 0
        ) {
          starArrayRef.current.splice(index, 1);
        }
      }

      delay--;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      displayPartsRef.current = initDisplayParts(canvas);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "rgb(240,240,240)",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Stars;

// Rest of your code remains the same

function spawnStars(starArray, canvas) {
  const x = Math.random() * canvas.width;
  const y = canvas.height / 2;
  const dx = 0;
  const z = 200; // Increased brightness

  for (let i = 0; i < 80; i++) {
    const dy = (Math.random() * 20 - 10) * 1.5;
    starArray.push({ x, y, dx, dy, z });
  }
}

function drawStar(star, ctx, canvas, displayParts, isDarkMode) {
  let partX = Math.floor((star.x / canvas.width) * PARTS);
  let partY = Math.floor((star.y / canvas.height) * PARTS);

  partX = Math.max(0, Math.min(partX, PARTS - 1));
  partY = Math.max(0, Math.min(partY, PARTS - 1));

  const index = partY * PARTS + partX;

  if (index >= 0 && index < displayParts.length && displayParts[index]) {
    ctx.beginPath();
    ctx.rect(
      star.x + displayParts[index].dx,
      star.y + displayParts[index].dy,
      2, // Bigger stars
      2
    );

    // Use fillStyle and fill for better visibility
    ctx.fillStyle = isDarkMode
      ? `rgba(255, 255, 255, ${star.z / 255})`
      : `rgba(0, 0, 0, ${star.z / 255})`;
    ctx.fill();
  }
}

function initDisplayParts(canvas) {
  const displayParts = [];
  for (let y = 0; y < PARTS; y++) {
    for (let x = 0; x < PARTS; x++) {
      displayParts.push({
        x: (x * canvas.width) / PARTS,
        y: (y * canvas.height) / PARTS,
        dx: 0,
        dy: 0,
      });
    }
  }
  return displayParts;
}

function drawRects(displayParts, ctx, canvas, isDarkMode) {
  // Use the exact same color as the background div

  ctx.fillStyle = isDarkMode ? "black" : "rgb(240,240,240)";

  displayParts.forEach((display) => {
    display.dx = display.dx * 0.98;
    display.dy = display.dy * 0.98;
    ctx.beginPath();
    ctx.fillRect(
      display.x + display.dx,
      display.y + display.dy,
      canvas.width / PARTS + 1,
      canvas.height / PARTS + 1
    );
  });
}
