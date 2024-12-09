let inputText = ''; // Store the input text
let lineHeight = 60; // Height of each line of text
let lines = []; // Array to store lines of text
var transportM;
var transportH;

let isTyping = false;

// Queue to store shapes
let shapes = [];

function preload() {
  transportM = loadFont('./fonts/transportm.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(48); // Set the text size to 48px
  textAlign(LEFT, TOP);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  if (!isTyping) {
    textFont(transportM);
    fill('white');
    textSize(48);
    textAlign(CENTER, TOP);
    text("This is an empty space for your thoughts.", windowWidth / 2, 30);
  } else {
    textAlign(LEFT, TOP);
  }

  // Redraw all stored shapes from the shapes queue
  for (let shape of shapes) {
    fill(shape.color);
    noStroke();
    if (shape.type === 'circle') {
      ellipse(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'square') {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === 'triangle') {
      let halfSize = shape.size / 2;
      triangle(
        shape.x, shape.y,                   // Top vertex
        shape.x - halfSize, shape.y + shape.size, // Bottom left vertex
        shape.x + halfSize, shape.y + shape.size  // Bottom right vertex
      );
    }
  }

  // Display all lines of text
  textFont(transportM);
  let yPos = 30;
  for (let line of lines) {
    // Check the brightness of the background behind each character
    let xPos = 30; // Starting position for each line
    for (let i = 0; i < line.length; i++) {
      // Calculate the width and height of the character
      let charWidth = textWidth(line.charAt(i));
      let charHeight = textAscent() + textDescent(); // Total height of the character

      // Calculate the center of the character
      let charCenterX = xPos + charWidth / 2;
      let charCenterY = yPos + charHeight / 2;

      // Get the pixel color at the center of the character
      let bgColor = get(charCenterX, charCenterY);
      
      // Calculate the brightness of the background color
      let brightnessValue = (0.2126 * red(bgColor) + 0.7152 * green(bgColor) + 0.0722 * blue(bgColor));
      
      // Set text color based on the brightness
      if (brightnessValue > 180) {
        fill(0); // If the background is too bright, set the text color to black
      } else {
        fill(255); // Otherwise, set the text color to white
      }
      
      // Draw the character at the correct position
      text(line.charAt(i), xPos, yPos);
      xPos += textWidth(line.charAt(i)); // Move to the next character position
    }
    yPos += lineHeight; // Move to the next line
  }
}

function keyTyped() {
  isTyping = true;
  // Add the new character to the current line
  let currentLine = lines.length > 0 ? lines[lines.length - 1] : '';
  currentLine += key;

  // Check if the line width exceeds the window width
  if (textWidth(currentLine) > windowWidth - 60) {
    // If it does, split the line and push the new character to a new line
    lines[lines.length - 1] = currentLine.slice(0, -1); // Save the part that fits
    lines.push(key); // Start a new line with the current character
  } else {
    // Otherwise, update the current line
    if (lines.length === 0) {
      lines.push(currentLine);
    } else {
      lines[lines.length - 1] = currentLine;
    }
  }

  // Call a function based on whether the character is a vowel, consonant, or symbol
  if (isVowel(key)) {
    handleVowel(key);
  } else if (isConsonant(key)) {
    handleConsonant(key);
  } else {
    handleSymbol(key);
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    if (lines.length > 0) {
      let currentLine = lines[lines.length - 1];

      // If current line is not empty, delete the last character
      if (currentLine.length > 0) {
        currentLine = currentLine.slice(0, -1);
        lines[lines.length - 1] = currentLine;
        
        // Remove the last shape if there's a corresponding shape
        shapes.pop();
      } else {
        // If current line is empty, delete the line
        if (lines.length > 1) {
          let prevLine = lines[lines.length - 2];

          // Remove the last character from the previous line
          if (prevLine.length > 0) {
            prevLine = prevLine.slice(0, -1);
            lines[lines.length - 2] = prevLine;
            
            // Remove the last shape for that character
            shapes.pop();
          }

          // Remove the current empty line
          lines.pop();
        }
      }
    }
  }
}

// Function to check if a character is a vowel
function isVowel(char) {
  return /[aeiouAEIOU]/.test(char);
}

// Function to check if a character is a consonant
function isConsonant(char) {
  return /[a-zA-Z]/.test(char) && !isVowel(char);
}

// Placeholder functions for vowels, consonants, and symbols
function handleVowel(vowel) {
  createCMYSplash();
}

function createCMYSplash() {
  // Randomly generate primary pastel colors (light red, green, blue)
  let colorChoice = random(['red', 'green', 'blue']);
  let splashColor;
  
  // Create pastel colors by using high RGB values (light shades)
  if (colorChoice === 'red') {
    splashColor = color(random(50, 100), random(200, 255), random(200, 255));
  } else if (colorChoice === 'green') {
    splashColor = color(random(200, 255), random(50, 100), random(200, 255));
  } else {
    splashColor = color(random(200, 255), random(200, 255), random(50, 100));
  }

  // Add splash to the shapes queue
  shapes.push({ type: 'circle', color: splashColor, x: random(width), y: random(height), size: random(50, 200) });
}

// Function to handle consonant input
function handleConsonant(consonant) {
  // Add a random pastel splash of primary color
  createRGBSplash();
}

function createRGBSplash() {
  // Randomly generate primary pastel colors (light red, green, blue)
  let colorChoice = random(['red', 'green', 'blue']);
  let splashColor;
  
  // Create pastel colors by using high RGB values (light shades)
  if (colorChoice === 'red') {
    splashColor = color(random(200, 255), random(50, 100), random(50, 100));
  } else if (colorChoice === 'green') {
    splashColor = color(random(50, 100), random(200, 255), random(50, 100));
  } else {
    splashColor = color(random(50, 100), random(50, 100), random(200, 255));
  }

  // Add splash to the shapes queue
  shapes.push({ type: 'circle', color: splashColor, x: random(width), y: random(height), size: random(50, 200) });
}

function handleSymbol(symbol) {
  createShape();
}

function createShape() {
  // Randomly choose between black or white
  let splashColor = random(['black', 'white']);
  
  // Randomly choose between square or triangle
  let shapeChoice = random(['square', 'triangle']);
  
  // Randomly position the splash
  let splashX = random(width);
  let splashY = random(height);

  // Randomly choose the size of the splash
  let splashSize = random(50, 200);

  // Store the shape in the queue
  if (shapeChoice === 'square') {
    shapes.push({ type: 'square', color: splashColor, x: splashX, y: splashY, size: splashSize });
  } else {
    shapes.push({ type: 'triangle', color: splashColor, x: splashX, y: splashY, size: splashSize });
  }
}
