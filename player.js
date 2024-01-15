// Load an image from file
const image = new Image();
image.src = 'player.png'; // Replace with the actual path to your image file

// Set initial position and styles
image.style.position = 'absolute';
image.style.left = '50px';
image.style.top = '50px';
image.style.width = '70px';
image.style.height = '90px';
image.style.cursor = 'grab';

// Append the image to the body
document.body.appendChild(image);

// Variables for position
let posX = parseInt(image.style.left, 10);
let posY = parseInt(image.style.top, 10);

// Function to handle key events
function handleKeyPress(e) {
  const speed = 10;
  switch (e.key) {
    case 'w':
    case 'ArrowUp':
      posY -= speed;
      break;
    case 'a':
    case 'ArrowLeft':
      posX -= speed;
      break;
    case 's':
    case 'ArrowDown':
      posY += speed;
      break;
    case 'd':
    case 'ArrowRight':
      posX += speed;
      break;
  }

  // Update the image position
  image.style.left = `${posX}px`;
  image.style.top = `${posY}px`;
}

// Add event listeners for key presses
document.addEventListener('keydown', handleKeyPress);

// Add drag functionality to the image
let isDragging = false;

image.addEventListener('mousedown', (e) => {
  isDragging = true;
  image.style.cursor = 'grabbing';
  e.preventDefault();
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  image.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    posX = e.clientX - image.width / 2;
    posY = e.clientY - image.height / 2;
    image.style.left = `${posX}px`;
    image.style.top = `${posY}px`;
    e.preventDefault();
  }
});
