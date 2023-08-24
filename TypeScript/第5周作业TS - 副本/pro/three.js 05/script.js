const canvas = document.getElementById("canvas")
// 场景设置
const scene = new THREE.Scene()

const material = new THREE.MeshNormalMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
}) //彩色贴图

let group = new THREE.Group()

let boxes = []
class box {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
        this.vy = Math.random() * 0.01
    }
    update() {
        this.y += this.vy
        if (this.y > 1 || this.y < -1) {
            this.vy = - this.vy
        }
    }
}

function init() {
    for (let i = -1; i < 1; i += 0.1) {
        for (let j = -1; j < 1; j += 0.1) {
            let geometry = new THREE.BoxGeometry(0.08, 0.08, 0.08)
            let mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                i, 0, j
            )
            boxes.push(new box(i, 0.5 - Math.random(), j))
            group.add(mesh)
        }
    }
    scene.add(group)
}
init()

//尺寸设置
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

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
camera.position.z = 2
camera.position.y = 0
// camera.rotation.y = -Math.PI / 4


function animation() {
    group.rotation.y += 0.001
    for (let i in boxes) {
        let b = boxes[i]
        b.update()
        group.children[i].position.set(b.x, b.y, b.z)
    }
    renderer.render(scene, camera)
}
setInterval(animation, 1000 / 60);