import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000,
);

const renderer = new WebGLRenderer({
    antialias: true,
    canvas: document.querySelector('canvas'),
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
window.addEventListener('resize', () => renderer.setSize(innerWidth, innerHeight));

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // other things per render…
}
animate();
