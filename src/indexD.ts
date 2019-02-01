const mes = document.createElement("div");
mes.innerHTML = "<h2>current: stats.js</h2>"
document.body.appendChild(mes);

import * as Stats from "stats.js"; // IDE:"yes!" Compiler:"No."

const stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
function animate() {
    stats.begin();
    // monitored code goes here
    stats.end();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
