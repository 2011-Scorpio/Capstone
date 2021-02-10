import React from 'react'
import * as THREE from 'three'

class BackgroundShape extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    let scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    let renderer = new THREE.WebGLRenderer({alpha: true})
    // renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('logo').appendChild(renderer.domElement)
    const geometry = new THREE.TorusGeometry(1, 0.25, 10, 45)
    let material = new THREE.MeshNormalMaterial()
    let plane = new THREE.Mesh(geometry, material)
    scene.add(plane)
    camera.position.z = 5
    const animate = function() {
      requestAnimationFrame(animate)
      plane.rotation.y += 0.01
      plane.rotation.z += 0.01
      renderer.render(scene, camera)
    }
    animate()

    //AUDIO ANALYSIS
    // let context = new (window.AudioContext || window.webkitAudioContext)()
    // let audio = document.getElementById('player-audio')
  }

  render() {
    return <div ref={ref => (this.mount = ref)} />
  }
}

export default BackgroundShape
