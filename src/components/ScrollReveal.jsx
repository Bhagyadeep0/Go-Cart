
//hooks
import { useEffect, useRef, useState } from "react";
 
const ScrollReveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
 
        scrollObserver.observe(ref.current);
 
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);
 
    const classes = `transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 " : "opacity-0 -translate-y-[-200px]"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default ScrollReveal;