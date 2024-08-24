// Animation 1: Fade In
anime({
    targets: '#helloWorld',
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad'
});

// Animation 2: Slide In from Left
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        translateX: [-500, 0],
        duration: 1000,
        easing: 'easeOutExpo'
    });
}, 1000);

// Animation 3: Bounce In
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        scale: [0, 1],
        duration: 1000,
        elasticity: 600,
        easing: 'easeOutElastic'
    });
}, 2000);

// Animation 4: Rotate In
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        rotate: [-360, 0],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}, 3000);

// Animation 5: Zoom In
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        scale: [0.5, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}, 4000);

// Animation 6: Slide Up
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        translateY: [500, 0],
        duration: 1000,
        easing: 'easeOutExpo'
    });
}, 5000);

// Animation 7: Slide Down
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        translateY: [-500, 0],
        duration: 1000,
        easing: 'easeOutExpo'
    });
}, 6000);

// Animation 8: Fade Out and In
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        opacity: [1, 0, 1],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
}, 7000);

// Animation 9: Wobble
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        translateX: [-30, 30, -30, 30, 0],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}, 8500);

// Animation 10: Color Change
setTimeout(() => {
    anime({
        targets: '#helloWorld',
        color: ['#fff', '#f00', '#00f', '#0f0', '#fff'],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
}, 9500);
