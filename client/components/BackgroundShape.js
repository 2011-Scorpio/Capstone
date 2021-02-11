import React from 'react'
import * as THREE from 'three'

class BackgroundShape extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    let scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    )
    let renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(window.innerWidth / 8, window.innerHeight / 8)
    document.getElementById('logo').appendChild(renderer.domElement)
    const geometry = new THREE.TorusGeometry(1, 0.25, 10, 45)
    let material = new THREE.MeshNormalMaterial()
    let plane = new THREE.Mesh(geometry, material)
    scene.add(plane)
    camera.position.z = 2
    const animate = function() {
      requestAnimationFrame(animate)
      plane.rotation.y += 0.03
      renderer.render(scene, camera)
    }
    animate()
  }

  render() {
    return (
      <span id="logo">
        <div ref={ref => (this.mount = ref)} />
      </span>
    )
  }
}

export default BackgroundShape
