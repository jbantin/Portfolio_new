import { useEffect, useRef } from "react";

const PARTS = 7;

const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const starArray = initStars(canvas);
    const displayParts = initDisplayParts(canvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawRects(displayParts, ctx, canvas);
      starArray.forEach((star) => {
        // Update position
        star.x += star.dx;
        star.y += star.dy;
        star.z += 0.005;

        if (star.x < 0) {
          star = resetStar(star, canvas);
        }
        if (star.x > canvas.width) {
          star = resetStar(star, canvas);
        }
        if (star.y < 0) {
          star = resetStar(star, canvas);
        }
        if (star.y > canvas.height) {
          star = resetStar(star, canvas);
        }

        // Draw star
        drawStar(star, ctx, canvas, displayParts);
      });

      requestAnimationFrame(animate);
    };

    animate(); // Start animation loop

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starArray.length = 0; // Clear the array
      starArray.push(...initStars(canvas)); // Add new stars
      displayParts.length = 0;
      displayParts.push(...initDisplayParts(canvas));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="fixed w-[100vw] h-[100vh] text-white bg-[#ffffff] font-bold text-4xl z-[-1]">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
export default Stars;

function initStars(canvas) {
  const starArray = [];
  for (let i = 0; i < 200; i++) {
    const dx = Math.random() * 6 - 3;
    const dy = Math.random() * 6 - 3;
    const v = Math.random() * 255;
    starArray.push({
      x: v * dx + canvas.width / 2,
      y: v * dy + canvas.height / 2,
      z: v,
      dx,
      dy,
    });
  }
  return starArray;
}

function resetStar(star, canvas) {
  star.x = canvas.width / 2;
  star.y = canvas.height / 2;
  star.z = 0;
  return star;
}

function drawStar(star, ctx, canvas, displayParts) {
  const index =
    Math.floor((star.y / canvas.height) * PARTS) * PARTS +
    Math.floor((star.x / canvas.width) * PARTS);

  // console.log(index);
  ctx.beginPath();
  ctx.rect(
    star.x + displayParts[index].dx,
    star.y + displayParts[index].dy,
    1,
    1
  );
  ctx.strokeStyle = `rgb(255,255,255,${star.z})`;
  ctx.stroke();
}
function initDisplayParts(canvas) {
  const displayParts = [];
  for (let y = 0; y < PARTS; y++) {
    for (let x = 0; x < PARTS; x++) {
      displayParts.push({
        x: (x * canvas.width) / PARTS,
        y: (y * canvas.height) / PARTS,
        dx: Math.floor(Math.random() * 1600) - 800,
        dy: Math.floor(Math.random() * 1600) - 800,
      });
    }
  }

  return displayParts;
}

function drawRects(displayParts, ctx, canvas) {
  ctx.fillStyle = "black";
  displayParts.forEach((display) => {
    display.dx = display.dx * 0.991;
    display.dy = display.dy * 0.991;
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
