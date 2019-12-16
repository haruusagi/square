document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelector('.js-square');

    document.addEventListener('mousemove', (event) => {
        const x = event.screenX / document.body.offsetWidth;
        const y = event.screenY / document.body.offsetHeight;
        square.style.cssText = `transform: rotateX(${(y * 180) - 90}deg) rotateY(${(x * -180) - 90}deg) translate(-10vw, -10vw)`;
    });
});