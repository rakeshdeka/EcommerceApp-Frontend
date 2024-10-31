// CustomCursor.js
import { useEffect, useState } from "react";
import { GoZoomIn } from "react-icons/go";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10 text-2xl"
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
            <GoZoomIn className=" text-[1.5rem]" />
        </div>
    );
};

export default CustomCursor;
