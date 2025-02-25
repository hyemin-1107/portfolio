import { useEffect } from "react";

const useSetShow = (setShowUnder) =>{

    useEffect(() => {
        const handleTopButton = () => {
            if (window.scrollY > 400) {
                setShowUnder(true)
            } else {
                setShowUnder(false)
            }
        }
        window.addEventListener("scroll", handleTopButton)
        return () => {
            window.removeEventListener("scroll", handleTopButton)
        }
    }, [setShowUnder])
};

export default useSetShow;