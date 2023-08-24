const bezier = {
    /**
     * @desc 二阶贝塞尔
     * @param {number} t 当前百分比（0～1）
     * @param {Array} p1 起点坐标
     * @param {Array} cp 控制点
     * @param {Array} p2 终点坐标
     */
    quad(t, p1, cp, p2) {
        const [x1, y1] = p1;
        const [cx, cy] = cp;
        const [x2, y2] = p2;
        const x = Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * cx + Math.pow(t, 2) * x2;
        const y = Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * cy + Math.pow(t, 2) * y2;
        return [x, y];
    },
    /**
     * @desc 三阶贝塞尔
     * @param {number} t 当前百分比（0～1）
     * @param {Array} p1 起点坐标
     * @param {Array} cp1 控制点1
     * @param {Array} cp2 控制点2
     * @param {Array} p2 终点坐标
     */
    cubic(t, p1, cp1, cp2, p2) {
        const [x1, y1] = p1;
        const [x2, y2] = p2;
        const [cx1, cy1] = cp1;
        const [cx2, cy2] = cp2;
        const x = Math.pow(1 - t, 3) * x1 + 3 * Math.pow(1 - t, 2) * t * cx1 + 3 * (1 - t) * Math.pow(t, 2) * cx2 + Math.pow(t, 3) * x2;
        const y = Math.pow(1 - t, 3) * y1 + 3 * Math.pow(1 - t, 2) * t * cy1 + 3 * (1 - t) * Math.pow(t, 2) * cy2 + Math.pow(t, 3) * y2;
        return [x, y];
    },
};
function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const container = document.querySelector('.container');
function like() {
    const el = document.createElement('IMG');
    el.onload = () => container.append(el);
    el.classList.add('like-pic');
    el.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU0MDk4MzA0MzcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQwNjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyNy4wNCA3NTMuOTJjMjEuOTg0IDE2Ljc2OCA1NC43MiAxMy4yOCA5MS41NTItOS44MjQgMTMuMjE2IDY5LjA4OCA5Ni41NzYgOTIuOTYgMTU5LjA0IDM1LjM5MmExNiAxNiAwIDAgMCAxLjcyOC0yMS42bC0xNzQuNzUyLTIyMy43NDQtNC42NzItNC4wMzJjLTM0LjIwOC0xOS41Mi0xMTcuNDQgMzcuNjMyLTE2Ni40NjQgOTkuNTUyLTI2Ljk0NCAzNC4wNDgtMzYuODMyIDYyLjYyNC0xNi4yMjQgODAuNjQgMTUuNTg0IDEzLjYzMiA0NS4xODQgMTIuNjcyIDkxLjg0LTEuNzkyLTIuMjA4IDE3LjQwOCAzLjYxNiAzNC40IDE3Ljk4NCA0NS4zNzZ6TTg5Ni45NiA3NTMuOTJjLTIxLjk4NCAxNi43NjgtNTQuNzIgMTMuMjgtOTEuNTUyLTkuODI0LTEzLjIxNiA2OS4wODgtOTYuNTc2IDkyLjk2LTE1OS4wNCAzNS4zOTJhMTYgMTYgMCAwIDEtMS43MjgtMjEuNmwxNzQuNzUyLTIyMy43NDQgNC42NzItNC4wMzJjMzQuMjA4LTE5LjUyIDExNy40NCAzNy42MzIgMTY2LjQ2NCA5OS41NTIgMjYuOTQ0IDM0LjA0OCAzNi44MzIgNjIuNjI0IDE2LjIyNCA4MC42NC0xNS41ODQgMTMuNjMyLTQ1LjE4NCAxMi42NzItOTEuODQtMS43OTIgMi4yMDggMTcuNDA4LTMuNjE2IDM0LjQtMTcuOTg0IDQ1LjM3NnoiIGZpbGw9IiNGRkM1Q0IiIHAtaWQ9IjQwNjUiPjwvcGF0aD48cGF0aCBkPSJNNDg0Ljg5NiAzOTMuNzI4YTE3OS4zOTIgMTc5LjM5MiAwIDAgMC0yNTMuNDQgMCAxNzkuMzI4IDE3OS4zMjggMCAwIDAgMCAyNTMuNDRsMjgwLjU3NiAyODAuNTQ0IDI4MC41NzYtMjgwLjU3NmExNzkuMzkyIDE3OS4zOTIgMCAwIDAgMC0yNTMuNDQgMTc5LjMyOCAxNzkuMzI4IDAgMCAwLTI1My40NCAwbC0yNy4xMzYgMjcuMTY4LTI3LjEzNi0yNy4xMzZ6IiBmaWxsPSIjRjgzQjU3IiBwLWlkPSI0MDY2Ij48L3BhdGg+PHBhdGggZD0iTTUxMiAyODhjMTQyLjY4OCAwIDI1Ni0zMC4yMDggMjU2LTgwUzY1NC42ODggMTI4IDUxMiAxMjhzLTI1NiAzMC4yMDgtMjU2IDgwUzM2OS4zMTIgMjg4IDUxMiAyODh6IG0wLTMyYy0xMjIuNDMyIDAtMjI0LTI3LjEwNC0yMjQtNDhTMzg5LjU2OCAxNjAgNTEyIDE2MHMyMjQgMjcuMTA0IDIyNCA0OFM2MzQuNDMyIDI1NiA1MTIgMjU2eiIgZmlsbD0iIzg0RUJGMSIgcC1pZD0iNDA2NyI+PC9wYXRoPjwvc3ZnPg==';
    const startPoint = [0, 0]
    const endPoint = [0, -300]
    const [controlPoint1, controlPoint2] = sample(
        [
            [[-450, -400], [0, -400]],
            [[450, -400], [0, -400]],
        ]
    )
    const keyframes = [{ offset: 0 }]
    for (let i = 0; i < 1; i += 0.05) {
        const [x, y] = bezier.cubic(i, startPoint, controlPoint1, controlPoint2, endPoint)
        keyframes.push({ offset: i, transform: `translate(${x}px, ${y}px)` })
    }
    keyframes.push({ offset: 1, opacity: 0, transform: `translate(${endPoint[0]}px, ${endPoint[1]}px)` })
    setTimeout(() => el.remove(), 3500)
    el.animate(keyframes, { easing: 'cubic-bezier(0.33, 1, 0.68, 1)', duration: 3500 })
}

setInterval(() => {
    like();
}, 100);