import { useState } from "react";

const Color = () => {
    const [color, setColor] = useState();
    const handleColor = () => {
        const color1 = Math.floor(Math.random() * 16777215+1).toString(16);
        if (color1.length < 6) {
            color1 = color1 + Math.floor(Math.random() * 10).toString();
        } else {
        setColor("#" + color1);
        }
    }
    return (
       
        <div style={{height:'100vh',  background: color}}> 
        <button onClick={handleColor}>Change Color</button>
        </div>
    ) 
};

export default Color;