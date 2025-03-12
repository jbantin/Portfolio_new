import { useEffect, useRef } from "react";

const PARTS = 10;

const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const starArray = initStars(canvas);
    const starArray = [];
    const displayParts = initDisplayParts(canvas);

    let delay = 60;

    let yPos = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const dy = scrollY - yPos;
      yPos = scrollY;

      displayParts.forEach((part) => {
        part.dx = part.dx - (Math.floor(Math.random() * dy * 6) - dy * 3);
        part.dy = part.dy - (Math.floor(Math.random() * dy * 10) - dy * 3);
      });
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (delay === 0) {
        delay = 10;
        spawnStars(starArray, canvas);
      }

      drawRects(displayParts, ctx, canvas);
      for (let index = starArray.length - 1; index >= 0; index--) {
        const star = starArray[index];
        // Update position
        // star.x += star.dx;
        star.y += star.dy;
        star.z -= 0.5;

        // Draw star
        drawStar(star, ctx, canvas, displayParts);

        // Handle out-of-bounds stars
        if (
          star.x < 0 ||
          star.x > canvas.width ||
          star.y < 0 ||
          star.y > canvas.height ||
          star.z < 0
        ) {
          starArray.splice(index, 1);
        }
      }
      delay--;
      requestAnimationFrame(animate);
    };

    animate(); // Start animation loop

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      displayParts.length = 0;
      displayParts.push(...initDisplayParts(canvas));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="fixed w-[100vw] h-[100vh] text-white bg-[#080808] font-bold text-4xl z-[-1]">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
export default Stars;

// function initStars(canvas) {
//   const starArray = [];
//   for (let i = 0; i < 200; i++) {
//     const dx = Math.random() * 6 - 3;
//     const dy = Math.random() * 6 - 3;
//     const v = Math.random() * 255;
//     starArray.push({
//       x: v * dx + canvas.width / 2,
//       y: v * dy + canvas.height / 2,
//       z: v,
//       dx,
//       dy,
//     });
//   }
//   return starArray;
// }
function spawnStars(starArray, canvas) {
  const x = Math.random() * canvas.width;
  const y = canvas.height / 2;
  const dx = 0;
  const z = 120;
  for (let i = 0; i < 80; i++) {
    const dy = (Math.random() * 20 - 10) * 1.5;

    starArray.push({ x, y, dx, dy, z });
  }
}
// function resetStar(star, canvas) {
//   star.x = canvas.width / 2;
//   star.y = canvas.height / 2;
//   star.z = 0;
//   return star;
// }

function drawStar(star, ctx, canvas, displayParts) {
  // Calculate the index based on star position
  let partX = Math.floor((star.x / canvas.width) * PARTS);
  let partY = Math.floor((star.y / canvas.height) * PARTS);

  // Ensure x and y are within bounds
  partX = Math.max(0, Math.min(partX, PARTS - 1));
  partY = Math.max(0, Math.min(partY, PARTS - 1));

  // Calculate the index with bounds checking
  const index = partY * PARTS + partX;

  // Safety check before accessing displayParts
  if (index >= 0 && index < displayParts.length && displayParts[index]) {
    ctx.beginPath();
    ctx.rect(
      star.x + displayParts[index].dx,
      star.y + displayParts[index].dy,
      1,
      1
    );
    ctx.strokeStyle = `rgba(255, 255, 255, ${star.z / 255})`; // Normalize z value
    ctx.stroke();
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

function drawRects(displayParts, ctx, canvas) {
  ctx.fillStyle = "black";
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
    // ctx.stroke();
  });
}
