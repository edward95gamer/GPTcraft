// Create a draggable image
const originalImage = document.createElement('img');
originalImage.src = 'tree.png'; // Replace with the actual image URL
originalImage.alt = 'Trees';
originalImage.style.position = 'absolute';
originalImage.style.width = '100px'; // Adjust the width as needed
originalImage.style.height = '100px'; // Adjust the height as needed
originalImage.style.cursor = 'grab';

// Append the original image to the body
document.body.appendChild(originalImage);

// Clone the image 10 times
for (let i = 1; i <= 10; i++) {
  const clonedImage = originalImage.cloneNode(true);
  document.body.appendChild(clonedImage);
}

// Add drag functionality to all images
document.querySelectorAll('img').forEach((image) => {
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
      image.style.left = (e.clientX - image.width / 2) + 'px';
      image.style.top = (e.clientY - image.height / 2) + 'px';
      e.preventDefault();
    }
  });
});
