export function initializeSpaceAnimation(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = []; 

    function setCanvasBackground() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function createStar() {
        const star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            opacity: Math.random(),
            fading: Math.random() > 0.5 ? true : false,
            velocityX: (Math.random() - 0.5) * 2,
            velocityY: (Math.random() - 0.5) * 2,
            movementType: Math.random() > 0.5 ? 'circular' : 'linear', 
        };
        stars.push(star);
    }
    
    function updateStars() {
        const time = Date.now() * 0.002;
    
        stars.forEach(star => {
            if (Math.random() < 0.01) { 
                star.movementType = star.movementType === 'circular' ? 'linear' : 'circular';
            }
    
            if (star.movementType === 'circular') {
                star.x += Math.cos(time + star.velocityX) * star.velocityX;
                star.y += Math.sin(time + star.velocityY) * star.velocityY;
            } else {
                star.x += star.velocityX;
                star.y += star.velocityY;
            }
    
            if (star.x < 0 || star.x > canvas.width) star.x = Math.random() * canvas.width;
            if (star.y < 0 || star.y > canvas.height) star.y = Math.random() * canvas.height;
    
            if (star.fading) {
                star.opacity -= 0.01;
                if (star.opacity <= 0) {
                    star.fading = false;
                    star.opacity = 0;
                }
            } else {
                star.opacity += 0.01;
                if (star.opacity >= 1) {
                    star.fading = true;
                    star.opacity = 1;
                }
            }
        });
    }

    function drawStar(star) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    }

    function animate() {
        setCanvasBackground();
        updateStars();
        stars.forEach(drawStar);
        requestAnimationFrame(animate);
    }

    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        setCanvasBackground();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    for (let i = 0; i < 100; i++) {
        createStar();
    }

    return () => {
        window.removeEventListener('resize', resizeCanvas);
    };
}