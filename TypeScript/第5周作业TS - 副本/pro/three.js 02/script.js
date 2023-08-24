const canvas = document.getElementById("canvas")
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1) // 立方体 参数为长宽高
    // const geometry = new THREE.PlaneGeometry(1, 1, 4, 4) //平面 参数为长宽，分割数量
    // const geometry = new THREE.CircleGeometry(1, 60) //圆形 参数为半径，分段数量
    // const geometry = new THREE.ConeGeometry(1, 1, 30, 5, false, Math.PI, Math.PI / 2) //圆锥 参数为底边半径、高、底边分割数量，侧面分割数量、底面封闭、起始角度、底面弧度值
    // const geometry = new THREE.CylinderGeometry(0.5, 1, 1, 30, 20, true, Math.PI, Math.PI) //圆柱 参数为顶部半径、底部半径、高、底边分割数、侧面分割数、底面封闭，起始角度、底面弧度值
    // const geometry = new THREE.DodecahedronGeometry(1, 0) //正十二面体 参数为半径，增加顶点(默认为0)
    // const geometry = new THREE.IcosahedronGeometry(1, 0) //正二十面体 参数为 半径，增加顶点(默认为0)
    // const geometry = new THREE.SphereGeometry( 1, 32, 16 ) //球体 参数为半径、水平分段数，垂直分段数
const material = new THREE.MeshNormalMaterial({
    side: THREE.DoubleSide,
    wireframe: true
})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


function animation() {
    mesh.rotation.y += 0.01
    mesh.rotation.z += 0.01
    mesh.rotation.x += 0.01
    renderer.render(scene, camera)
}
setInterval(animation, 100 / 6)