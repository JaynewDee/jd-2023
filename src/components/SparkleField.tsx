import { Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import "../styles/sparkles.css"
import { createPortal } from 'react-dom'

export default function SparkleField() {
    return createPortal((
        <Canvas camera={{ position: [0, 0, 0], fov: 150 }} id="canvas-element">
            <Sparkles speed={.05} count={100} opacity={.2} color="rgb(103, 151, 200)" />
        </Canvas>
    ), document.getElementById('sparkles-root') as HTMLElement)
}
