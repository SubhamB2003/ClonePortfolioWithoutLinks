import React, { useEffect, useState } from 'react';
import "./style.css";


function Progressbar() {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100 - 0.2;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="progressMainWrapper">
            <div className="progressMainStyle" style={{ width: `${scrollTop}%` }} />
        </div >
    )
}

export default Progressbar;