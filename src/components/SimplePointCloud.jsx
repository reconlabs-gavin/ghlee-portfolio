import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function SimplePointCloud() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    console.log('Starting Simple Point Cloud...')

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 10

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Simple particles
    const particleCount = 1000
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50     // x
      positions[i + 1] = (Math.random() - 0.5) * 50 // y
      positions[i + 2] = (Math.random() - 0.5) * 50 // z
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0x3498ff,
      size: 3,
      transparent: true,
      opacity: 0.8
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.y += 0.005
      points.rotation.x += 0.002
      renderer.render(scene, camera)
    }

    animate()
    console.log('Simple Point Cloud initialized!')

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}
