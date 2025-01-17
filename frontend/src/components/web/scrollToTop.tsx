import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percent = (scrollTop / scrollHeight) * 100;
            setScrollPercent(percent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const radius = 18; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;
    return (

                <div
                    className={`fixed bottom-5 right-5 w-16 h-16 flex items-center justify-center transition-all ease-in-out duration-500 cursor-pointer z-50 ${scrollPercent < 8 ? 'translate-y-56' : ''}`}
                    onClick={scrollToTop}
                >
                    {/* SVG for Circular Progress */}
                    <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 60 60"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Background Circle */}
                        <circle
                            cx="30"
                            cy="30"
                            r={radius}
                            stroke="lightgray"
                            strokeWidth="1"
                            fill="none"
                        />
                        {/* Progress Circle */}
                        <circle
                            cx="30"
                            cy="30"
                            r={radius}
                            stroke="black"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-300"
                        />
                    </svg>

                    {/* Center Icon */}
                    <span className="absolute font-bold rotate-180">V</span>
                </div>
    );
}

export default ScrollToTopButton;
