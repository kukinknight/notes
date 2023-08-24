const canvas = document.getElementById("canvas")
// 场景设置
const scene = new THREE.Scene()

const material = new THREE.MeshNormalMaterial({
    side: THREE.DoubleSide,
}) //彩色贴图
let group = new THREE.Group()
for (let i = 0; i < 5000; i++) {
    let geometry = new THREE.CircleGeometry(Math.random() * 0.01, 20)
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(
        1 - Math.random() * 2,
        1 - Math.random() * 2,
        1 - Math.random() * 2
    )
    mesh.rotation.set(
        1 - Math.random() * 2,
        1 - Math.random() * 2,
        1 - Math.random() * 2
    )
    group.add(mesh)
}
scene.add(group)

//尺寸设置
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// group.scale.set(0.5, 0.5, 1)
//镜头
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height
)

scene.add(camera)

//渲染

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
camera.position.z = 0.5



function animation() {
    group.rotation.y += 0.001
    group.rotation.z += 0.001
    for (let i in group.children) {
        let m = group.children[i]
        m.rotation.y += 0.01
        m.rotation.z += 0.01
    }
    renderer.render(scene, camera)
}
setInterval(animation, 1000 / 60);