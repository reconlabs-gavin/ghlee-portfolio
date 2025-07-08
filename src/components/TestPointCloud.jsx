import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TestPointCloud() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    console.log('TestPointCloud: Starting...')

    // Basic Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Simple point cloud
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100     // x
      positions[i + 1] = (Math.random() - 0.5) * 60  // y
      positions[i + 2] = (Math.random() - 0.5) * 60  // z
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0x3498ff,
      size: 2,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    camera.position.z = 50

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.y += 0.002
      points.rotation.x += 0.001
      renderer.render(scene, camera)
    }

    animate()
    console.log('TestPointCloud: Animation started')

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
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}
