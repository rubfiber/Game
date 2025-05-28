const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// Add your scene objects and setup here
const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 3, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

const box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);

engine.runRenderLoop(() => {
    scene.render();
    });