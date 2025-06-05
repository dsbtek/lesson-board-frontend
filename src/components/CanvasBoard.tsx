'use client';
import { useRef, useEffect } from 'react';

export default function CanvasBoard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.6;

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000'; // Default black color
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        let isDrawing = false;

        const startDrawing = (event: MouseEvent) => {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(
                event.clientX - canvas.offsetLeft,
                event.clientY - canvas.offsetTop,
            );
        };

        const draw = (event: MouseEvent) => {
            if (!isDrawing) return;
            ctx.lineTo(
                event.clientX - canvas.offsetLeft,
                event.clientY - canvas.offsetTop,
            );
            ctx.stroke();
        };

        const stopDrawing = () => {
            isDrawing = false;
            ctx.closePath();
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseleave', stopDrawing);
        };
    }, []);

    return (
        <div className="relative">
            <canvas
                ref={canvasRef}
                className="border-2 border-gray-300"
            ></canvas>
        </div>
    );
}
