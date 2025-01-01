import { useEffect, useState } from "react";


export default function ContainerFundo({children}) {

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
            return "bg-fundoDesktop"
        } else {
            return "bg-fundoMobile"
        }
    }

    return (
        <div className={`bg-VerPaleCyan w-full h-screen ${isMobile()} bg-cover bg-center bg-no-repeat relative`}>
            {children}
        </div>
    )
}
