function home() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("nav");

      if (d.style.display === "none") {
        x.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
      } else {
        d.style.display = "none";
      }
  }
  
       function name() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("nav");

      if (x.style.display === "none") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
      } else {
        x.style.display = "none";
      }
  }

  function abtme() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("nav");

      if (c.style.display === "none") {
        c.style.display = "block";
        x.style.display = "none";
        b.style.display = "none";
        a.style.display = "none";
        d.style.display = "none";
     } else {
        c.style.display = "none";
     }
  }
  

function work() {
  var x = document.getElementById("nameTab");
  var a = document.getElementById("workTab");
  var b = document.getElementById("resumeTab");
  var c = document.getElementById("aboutTab");
  var d = document.getElementById("nav");

  if (a.style.display === "none") {
    a.style.display = "block";
    x.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    a.style.display = "none";
  }
}

function resume() {
  var x = document.getElementById("nameTab");
  var a = document.getElementById("workTab");
  var b = document.getElementById("resumeTab");
  var c = document.getElementById("aboutTab");
  var d = document.getElementById("nav");

  if (b.style.display === "none") {
    b.style.display = "block";
    x.style.display = "none";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    b.style.display = "none";
  }
}




const imageFolder = 'hpimages/';
const imageCount = 12; 


function loadImages() {
    const container = document.body;

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}${i}.png`; 
        img.alt = `Image ${i}`;
        img.classList.add('random-image');
        img.style.position = 'absolute'; 
        container.appendChild(img);

        img.onload = () => positionImage(img);
    }
}


function positionImage(img) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    const maxLeft = viewportWidth - imgWidth; 
    const maxTop = viewportHeight - imgHeight; 

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
            event.preventDefault(); 
            positionImagesRandomly(); 
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    loadImages(); 
    setupSpaceBarListener(); 
});



window.addEventListener('resize', positionImagesRandomly);

const text = "EMMA TAYLOR";

const hoverTextElement = document.getElementById("hover-text");

hoverTextElement.innerHTML = text
    .split("")
    .map(letter => `<span>${letter}</span>`)
    .join("");

