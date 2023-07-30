import { useEffect, useState } from 'react';

export function useScrollDetection() {
    const [scrolledFromTop, setScrolledFromTop] = useState(false);

    const handleScroll = () => {
        const threshold = 100;

        const isScrolled = window.scrollY > threshold;

        setScrolledFromTop(isScrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return scrolledFromTop;
}