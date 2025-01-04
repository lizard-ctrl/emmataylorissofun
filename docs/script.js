// Path to the folder containing the images
const imageFolder = 'hpimages/';
const imageCount = 12; // Total number of images

// Function to dynamically create image elements
function loadImages() {
    const container = document.body;

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}${i}.png`; // Assuming images are numbered 1.jpg, 2.jpg, ..., 12.jpg
        img.alt = `Image ${i}`;
        img.classList.add('random-image');
        img.style.position = 'absolute'; // Ensure images are absolutely positioned
        container.appendChild(img);

        // Position image immediately after it loads
        img.onload = () => positionImage(img);
    }
}

// Function to randomly position a single image within the bounds of the browser
function positionImage(img) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    const maxLeft = viewportWidth - imgWidth; // Ensure the image doesn't go out of bounds horizontally
    const maxTop = viewportHeight - imgHeight; // Ensure the image doesn't go out of bounds vertically

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    img.style.left = `${randomLeft}px`;
    img.style.top = `${randomTop}px`;
}

// Function to randomly position all images
function positionImagesRandomly() {
    const images = document.querySelectorAll('.random-image');
    images.forEach(positionImage);
}

// Event listener for spacebar press
function setupSpaceBarListener() {
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent default behavior like scrolling
            positionImagesRandomly(); // Reposition all images
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    loadImages(); // Load the images dynamically
    setupSpaceBarListener(); // Add space bar listener
});


// Adjust positions when the window resizes
window.addEventListener('resize', positionImagesRandomly);

// The text you want to display
const text = "EMMA TAYLOR";

// Select the h1 element
const hoverTextElement = document.getElementById("hover-text");

// Split the text into individual letters and wrap each in a <span>
hoverTextElement.innerHTML = text
    .split("")
    .map(letter => `<span>${letter}</span>`)
    .join("");

