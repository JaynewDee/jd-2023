import { useState, useEffect } from "react"

export function useViewportQuery() {
    const [dimensions, setDimensions] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        function handleResize(_: UIEvent) {
            setDimensions([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return dimensions;
}