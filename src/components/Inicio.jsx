import { useEffect, useState } from "react";

export default function Inicio() {

const [mobile, setMobile] = useState("");

    useEffect(() => {
        const handleMobile = () => {
            setMobile(window.innerWidth);
            
        };

        window.addEventListener("resize", handleMobile());
        return () => {
            window.removeEventListener("resize", handleMobile());
        };
        
    }, [window.innerWidth]);

    const isMobile = () => {
        if (mobile <= 385) {
            return 'calc(100dvh - 100px)'
        } else {
            return 'calc(100dvh - 108px)'
        }
    }
    
  return (
      <div className="w-full" style={{height: isMobile()}}>
      hello world!
    </div>
  )
}
