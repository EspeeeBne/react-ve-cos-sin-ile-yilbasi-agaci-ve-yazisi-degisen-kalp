import React, { useRef, useEffect } from "react";

const HeartCanvas = () => {
  const canvasRef = useRef(null);
  const text = process.env.REACT_APP_HEART_TEXT || "2025";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const drawHeart = () => {
      const heartWidth = width * 0.7;
      const heartHeight = height * 0.6;
      const heartX = width / 2;
      const heartY = height / 2;

      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(heartX, heartY - heartHeight * 0.2);
      ctx.bezierCurveTo(
        heartX - heartWidth * 0.5,
        heartY - heartHeight * 0.8,
        heartX - heartWidth,
        heartY + heartHeight * 0.2,
        heartX,
        heartY + heartHeight * 0.5
      );
      ctx.bezierCurveTo(
        heartX + heartWidth,
        heartY + heartHeight * 0.2,
        heartX + heartWidth * 0.5,
        heartY - heartHeight * 0.8,
        heartX,
        heartY - heartHeight * 0.2
      );
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "green";
      const fontSize = Math.min(heartWidth * 0.15, 50);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, heartX, heartY);
    };

    drawHeart();
  }, [text]);

  return <canvas ref={canvasRef} width={600} height={600} style={{ border: "1px solid #ddd" }} />;
};

export default HeartCanvas;
