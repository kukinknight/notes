const canvas = document.getElementById("canvas")
    // 场景设置
const scene = new THREE.Scene()

//几何体
const geometry = new THREE.BoxGeometry(1, 1, 1) // 立方体 参数为长宽高

const edges = new THREE.EdgesGeometry(geometry) //获取几何体的边缘
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ //创建对象绘制几何体的边缘
    color: 0xffffff
}))
const material = new THREE.MeshBasicMaterial({ //贴图对象
    color: '#1e90ff',
    // wireframe: true, //线框模式
    transparent: true, //opacity属性生效必须设置transparent为true
    opacity: 0.5,
})
const mesh = new THREE.Mesh(geometry, material) //根据几何体和贴图创建物体
scene.add(mesh, line) //添加物体和线

//尺寸设置
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//镜头
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

scene.add(camera)

//渲染

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)



function animation() {
    mesh.rotation.y += 0.01
    line.rotation.y += 0.01
    mesh.rotation.z += 0.01
    line.rotation.z += 0.01
    renderer.render(scene, camera)
}
setInterval(animation, 1000 / 60);