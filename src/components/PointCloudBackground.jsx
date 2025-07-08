import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function PointCloudBackground() {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const particlesRef = useRef(null)
  const animationIdRef = useRef(null)
  const originalPositionsRef = useRef(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    if (!mountRef.current || isAnimatingRef.current) return

    console.log('PointCloudBackground: Starting initialization...')
    isAnimatingRef.current = true

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0) // Transparent background
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create point cloud
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const originalPositions = new Float32Array(particleCount * 3)

    // Blue color palette
    const blueColors = [
      new THREE.Color(0x3498ff), // Main blue
      new THREE.Color(0x64b5f6), // Light blue
      new THREE.Color(0x81c7ff), // Lighter blue
      new THREE.Color(0x1e88e5), // Darker blue
      new THREE.Color(0x42a5f5), // Medium blue
    ]

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Random positions
      const x = (Math.random() - 0.5) * 100
      const y = (Math.random() - 0.5) * 60
      const z = (Math.random() - 0.5) * 60
      
      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z
      
      // Store original positions for wave animation
      originalPositions[i3] = x
      originalPositions[i3 + 1] = y
      originalPositions[i3 + 2] = z

      // Random blue colors
      const color = blueColors[Math.floor(Math.random() * blueColors.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      // Smaller, more varied particle sizes
      sizes[i] = Math.random() * 1.2 + 0.3
    }

    originalPositionsRef.current = originalPositions

    // Geometry and material
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.3,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(geometry, material)
    particlesRef.current = particles
    scene.add(particles)
    
    console.log('PointCloudBackground: Particles created and added to scene', particles)

    // Enhanced animation function with debugging
    let time = 0
    console.log('PointCloudBackground: Animation function created')
    
    const animate = () => {
      // Check if we should continue animating
      if (!isAnimatingRef.current || !particlesRef.current || !originalPositionsRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
        return
      }
      
      time += 0.01
      
      const positions = particlesRef.current.geometry.attributes.position.array
      const originalPositions = originalPositionsRef.current
      
      // Enhanced particle animation
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // Get original position
        const originalX = originalPositions[i3]
        const originalY = originalPositions[i3 + 1]
        const originalZ = originalPositions[i3 + 2]
        
        // Multi-layered wave animation
        const waveX = Math.sin(time * 2 + originalX * 0.01) * 2
        const waveY = Math.cos(time * 1.5 + originalY * 0.02) * 1.5
        const waveZ = Math.sin(time * 3 + originalZ * 0.015) * 1
        
        // Floating animation
        const floatY = Math.sin(time * 1.2 + originalX * 0.005) * 0.8
        
        // Spiral movement
        const spiralAngle = time * 0.5 + i * 0.01
        const spiralRadius = 0.5
        const spiralX = Math.cos(spiralAngle) * spiralRadius
        const spiralZ = Math.sin(spiralAngle) * spiralRadius
        
        // Combine all animations
        positions[i3] = originalX + waveX + spiralX
        positions[i3 + 1] = originalY + waveY + floatY
        positions[i3 + 2] = originalZ + waveZ + spiralZ
      }
      
      // Force geometry update - multiple methods for compatibility
      const geometry = particlesRef.current.geometry
      const positionAttribute = geometry.attributes.position
      positionAttribute.needsUpdate = true
      geometry.computeBoundingSphere()
      geometry.computeBoundingBox()
      
      // Gentle rotation of entire cloud
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
      
      // Render the scene
      rendererRef.current.render(sceneRef.current, cameraRef.current)
      
      // Continue animation loop only if still active
      if (isAnimatingRef.current) {
        animationIdRef.current = requestAnimationFrame(animate)
      }
    }

    // Start animation immediately
    console.log('PointCloudBackground: Starting animation...')
    animate()

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      console.log('PointCloudBackground: Cleaning up...')
      isAnimatingRef.current = false
      
      window.removeEventListener('resize', handleResize)
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
        animationIdRef.current = null
      }
      
      if (mountRef.current && rendererRef.current && rendererRef.current.domElement) {
        try {
          mountRef.current.removeChild(rendererRef.current.domElement)
        } catch (e) {
          console.log('PointCloudBackground: DOM element already removed')
        }
      }
      
      if (particlesRef.current) {
        if (particlesRef.current.geometry) particlesRef.current.geometry.dispose()
        if (particlesRef.current.material) particlesRef.current.material.dispose()
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose()
        rendererRef.current = null
      }
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
        pointerEvents: 'none',
        opacity: 0.9
      }}
    />
  )
}
