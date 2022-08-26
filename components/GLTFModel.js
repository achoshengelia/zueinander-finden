import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useWindowSize } from "../helpers/useWIndowHooks"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/scene.glb")

  const { width } = useWindowSize()
  const scale = width < 1025 ? [0.03, 0.03, 0.03] : [0.05, 0.05, 0.05]
  const position = width < 1025 ? [-1.7, -1.7, -1] : [-3, -3, -1.5]

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={position} geometry={nodes.Body1.geometry} material={nodes.Body1.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body1_1.geometry} material={nodes.Body1_1.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body2.geometry} material={nodes.Body2.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body3.geometry} material={nodes.Body3.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body4.geometry} material={nodes.Body4.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body1_2.geometry} material={nodes.Body1_2.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body2_1.geometry} material={nodes.Body2_1.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body3_1.geometry} material={nodes.Body3_1.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body4_1.geometry} material={nodes.Body4_1.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body5.geometry} material={nodes.Body5.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body6.geometry} material={nodes.Body6.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body7.geometry} material={nodes.Body7.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body8.geometry} material={nodes.Body8.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body9.geometry} material={nodes.Body9.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body10.geometry} material={nodes.Body10.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body11.geometry} material={nodes.Body11.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body13.geometry} material={nodes.Body13.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body14.geometry} material={nodes.Body14.material} scale={scale} />
      <mesh position={position} geometry={nodes.Body16.geometry} material={nodes.Body16.material} scale={scale} />
    </group>
  )
}

useGLTF.preload("/scene.glb")
