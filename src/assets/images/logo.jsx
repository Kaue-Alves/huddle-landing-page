import { useEffect } from "react";
import { useState } from "react";
import logo from "../images/logo.png"

export default function Logo() {
    // alert(window.innerWidth)

    const [largura, setLargura] = useState("");

    useEffect(() => {
        const handleLargura = () => {
            setLargura(window.innerWidth);
            
        };

        window.addEventListener("resize", handleLargura);
        return () => {
            window.removeEventListener("resize", handleLargura);
        };
    }, [window.innerWidth]);

    const isMobile = () => {
        if (largura <= 385) {
            return true
        } else {
            return false
        }
    }

    return (
        <img src={logo} className="w-auto h-5 sm:h-full">
        
        </img>
    );
}
