// Import if using npm (not needed if using CDN)
//import confetti from 'canvas-confetti';

// Add click event listeners to all buttons
console.log("Hello poop");
document.querySelectorAll('button, .button').forEach(button => {
  button.addEventListener('click', () => {
    // Create confetti burst from the button's position
    const rect = button.getBoundingClientRect();
    const x = (rect.left + rect.right) / 2 / window.innerWidth;
    const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
      startVelocity: 30,
      gravity: 0.5,
      scalar: 0.7,
      zIndex: 9999
    });  
    console.log("Hello ooooodd");

  });
});


const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create particles
const particles = [];
const particleCount = 60;
let mouseX = 0;
let mouseY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create image objects for particles
const particleImages = [
    //'curry1.png', // Replace with your image paths
    'lebron1.png'
    //'messi.png',
    //'palmer2.png'
];

const loadedImages = [];

// Preload images
function preloadImages() {
    particleImages.forEach(src => {
        const img = new Image();
        img.src = src;
        loadedImages.push(img);
    }); 
}

// Particle class with image support
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20; // Adjust size range for images
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        const randomImage = Math.floor(Math.random() * loadedImages.length);    
        if (randomImage === 1) {
          this.size *= 2.5;
        }
        else if (randomImage === 2) {
          this.size *= 1.5;
        }
        else if (randomImage === 3) {
          this.size *= 1.75;
        }
        else if (randomImage === 0) {
          this.size *= 2.8;
        }
        this.image = loadedImages[randomImage];
        this.angle = Math.random() * 360; // Random initial rotation
        this.rotationSpeed = (Math.random() - 0.5) * 2; // Random rotation speed
    }

    draw() {
        ctx.save(); // Save current context state
        ctx.translate(this.x, this.y); // Move to particle position
        ctx.rotate(this.angle * Math.PI / 180); // Rotate
        ctx.drawImage(
            this.image, 
            -this.size/2, // Center image
            -this.size/2,
            this.size,
            this.size
        );
        ctx.restore(); // Restore context state
        
        // Update rotation
        this.angle += this.rotationSpeed;
    }

    update() {
        // Calculate distance between particle and mouse
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 280;
        let force = (maxDistance - distance) / maxDistance;
        
        if (distance < maxDistance) {
            // Push particles away from cursor
            this.x -= forceDirectionX * force * this.density;
            this.y -= forceDirectionY * force * this.density;
        } else {
            // Return particles to original position
            if (this.x !== this.baseX) {
                dx = this.baseX - this.x;
                this.x += dx/20;
            }
            if (this.y !== this.baseY) {
                dy = this.baseY - this.y;
                this.y += dy/20;
            }
        }
    }
}

// Modified init function to wait for images
async function init() {
    await new Promise(resolve => {
        let loadedCount = 0;
        loadedImages.forEach(img => {
            img.onload = () => {
                loadedCount++;
                if (loadedCount === particleImages.length) {
                    resolve();
                }
            };
        });
    });

    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// Start everything
preloadImages();
init().then(() => {
    animate();
});

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animate);
}
