let leftPaddle, rightPaddle;
let ballX, ballY, ballSpeedX, ballSpeedY;
let leftScore = 0, rightScore = 0;
let rightColor = 'lightblue';
let playButton;
let gamePlaying = false;
let gameStarted = false;
let showControls = false;
let multiplayer = false;
let playerChoiceMade = false; // Track if the player mode is selected
let showMessage = true; // Flag to track if the message should be shown
let messageStartTime;   // Store the start time when the message is displayed
let showMidMessage = false;
let midMessageStartTime;
let currMidMessage = -1;
let midMessages = ["HAVING FUN YET?", "TIME FLIES (AWAY)", "EVERY SECOND COUNTS", "TICK TOCK TICK TOCK TICK TOCK", "WHY SPEND YOUR TIME ON THIS?"]



function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('game-container');
  textFont('Arial');
  textSize(40);      // Adjust the size to fill the screen
  textAlign(CENTER, CENTER);
  
  messageStartTime = millis();

  // Initialize paddles
  leftPaddle = new Paddle(10, height / 2 - 30);
  rightPaddle = new Paddle(width - 20, height / 2 - 30);

  // Initialize ball
  resetBall();
  
  // Create player choice buttons
  onePlayerButton = createButton('1 Player');
  onePlayerButton.parent('game-container');
  onePlayerButton.position(width / 2 - 100, height / 2 - 50);
  styleButton(onePlayerButton);
  onePlayerButton.hide();
  

  twoPlayerButton = createButton('2 Player');
  twoPlayerButton.parent('game-container');
  twoPlayerButton.position(width / 2 + 20, height / 2 - 50);
  styleButton(twoPlayerButton);
  twoPlayerButton.hide();
  
  onePlayerButton.mousePressed(() => {
    selectSingleplayer();
  });
  twoPlayerButton.mousePressed(() => {
    selectMultiplayer();
  });

  // Create play button
  playButton = createButton('Play');
  playButton.parent('game-container');
  playButton.position(width / 2 - 30, height / 2 - 20);
  styleButton(playButton);
  playButton.hide();
  playButton.mousePressed(() => {
    startRound();
  });
  
  // Create play button
  newGameButton = createButton('New Game');
  newGameButton.parent('game-container');
  newGameButton.position(width - 180, 20);
  styleButton(newGameButton);
  newGameButton.hide();
  newGameButton.mousePressed(() => {
    newGame();
  });
}

function draw() {
  background(0);
  
  // Display the message for 1.5 seconds
  if (showMessage && millis() - messageStartTime < 3000) {
    displayRepeatingText("TIME FLIES WHEN YOU'RE HAVING FUN.");
  } else if (!showMessage) {
    
  } else {
    showMessage = false; // Stop showing the message after 1.5 seconds
    onePlayerButton.show();
    twoPlayerButton.show();
  }
  
  if (!playerChoiceMade && keyIsDown(49)) {
    selectSingleplayer();
  } else if (!playerChoiceMade && keyIsDown(50)) {
    selectMultiplayer();
  }
  
  if (!gamePlaying && playerChoiceMade && keyIsDown(32)) {
    startRound();
  } else if (!gamePlaying && playerChoiceMade && keyIsDown(78)) {
    newGame();
  }
  
  if (showMidMessage && !gamePlaying && millis() - midMessageStartTime < 3000) {
    displayRepeatingText(midMessages[currMidMessage]);
  } else if (!showMidMessage && !gamePlaying) {
    
  } else if (!gamePlaying) {
    showMidMessage = false; // Stop showing the message after 1.5 seconds
    playButton.show();
    newGameButton.show();
  }
  
  if (showControls) {
    displayControls();
  }
  
  // DEBUG TOOL
  // fill(255);
  // textSize(20);
  // text(`CurrMess: ${currMidMessage}`, width - 120, 30); // Display the speed at the top right

  // Draw paddles and update based on keys
  leftPaddle.show();
  leftPaddle.update();
  rightPaddle.show();
  rightPaddle.update();
  
  if (gameStarted) {
    // Display the score
    fill(255);
    textSize(25);
    text(`${leftScore} - ${rightScore}`, width / 2, 30);
  }

  // Display and move the ball only if the game has started
  if (gamePlaying) {    
    displayBall();
    moveBall();
  }
}

function displayBall() {
  // Get the current system time
  let h = hour(); // Get the hour in 24-hour format
  h = h % 12;     // Convert to 12-hour format (0 becomes 12)
  h = h === 0 ? 12 : h;
  let currentTime = nf(h, 2) + ':' + nf(minute(), 2) + ':' + nf(second(), 2);

  // Display the time as the ball
  textSize(24);
  textAlign(CENTER, CENTER);
  fill('yellow');
  text(currentTime, ballX, ballY);
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  textSize(24);
  let h = hour(); // Get the hour in 24-hour format
  h = h % 12;     // Convert to 12-hour format (0 becomes 12)
  h = h === 0 ? 12 : h;
  let timeWidth = textWidth(nf(h, 2) + ':' + nf(minute(), 2) + ':' + nf(second(), 2));
  let timeHeight = 24; // Text height we defined in `displayBall`


  // Check for top and bottom collisions
  if (ballY <= 0 || ballY >= height) {
    ballSpeedY *= -1; 
  }

  // Check for paddle collisions
  if (
    ballSpeedX < 0 && // Ball moving left
    ballX - timeWidth / 2 <= leftPaddle.x + leftPaddle.width && // Horizontal overlap with left paddle
    ballY + timeHeight / 2 >= leftPaddle.y + 2 && // Ball bottom inside paddle height
    ballY - timeHeight / 2 <= leftPaddle.y + leftPaddle.height - 2 // Ball top inside paddle height
  ) {
    ballX += leftPaddle.width;
    if (ballSpeedX > -4) {
      ballSpeedX = 10;
    } else if (ballSpeedX < -13) {
      ballSpeedX = 11;
    } else {
      ballSpeedX *= random([-1.3, -0.75])
    }
    if (ballSpeedY < 0.5 && ballSpeedY > -0.5) {
      ballSpeedY = 3;
    }
    else {
      ballSpeedY *= random([0.8, 1.3])
    }
  } else if (
    ballSpeedX > 0 && // Ball moving right
    ballX + timeWidth / 2 >= rightPaddle.x && // Horizontal overlap with right paddle
    ballY + timeHeight / 2 >= rightPaddle.y + 2 && // Ball bottom inside paddle height
    ballY - timeHeight / 2 <= rightPaddle.y - 2 + rightPaddle.height // Ball top inside paddle height
  ) {
    ballX -= rightPaddle.width;
    if (ballSpeedX < 4) {
      ballSpeedX = -10;
    } else if (ballSpeedX > 13) {
      ballSpeedX = -11;
    } else {
      ballSpeedX *= random([-1.3, -0.75])
    }
    if (ballSpeedY < 0.5 && ballSpeedY > -0.5) {
      ballSpeedY = 3;
    }
    else {
      ballSpeedY *= random([0.8, 1.3])
    }

  }

  // Check if the ball goes out of bounds to the left or right
  if (ballX < 0) {
    rightScore++;
    endRound();
  } else if (ballX > width) {
    leftScore++;
    endRound();
  }
}

function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = random([-5, 5]);
  ballSpeedY = random(-3, 3);
}

function displayControls() {
  textSize(24);
  textAlign(CENTER, CENTER);

  // Left paddle controls: E and D
  fill(255);
  rect(30, height / 2 - 50, 40, 40, 10);
  fill(0);
  text('E', 50, height / 2 - 30);

  fill(255);
  rect(30, height / 2 + 10, 40, 40, 10);
  fill(0);
  text('D', 50, height / 2 + 30);

  if (multiplayer) {
    // Right paddle controls: I and K
    fill(255);
    rect(width - 70, height / 2 - 50, 40, 40, 10);
    fill(0);
    text('I', width - 50, height / 2 - 30);

    fill(255);
    rect(width - 70, height / 2 + 10, 40, 40, 10);
    fill(0);
    text('K', width - 50, height / 2 + 30);
  }
}

function startRound() {
  gamePlaying = true;
  gameStarted = true;
  resetBall();
  playButton.hide();
  newGameButton.hide();
  showControls = false;
}
    
function endRound() {
  showMidMessage = true;
  midMessageStartTime = millis();
  currMidMessage = min(currMidMessage + 1, 4);
  resetBall();
  gamePlaying = false;
  // playButton.show();
  // newGameButton.show();
}  

function selectSingleplayer() {
  multiplayer = false; // Singleplayer mode
  playButton.show(); // Show the play button
  showControls = true;
  playerChoiceMade = true;
  onePlayerButton.hide();
  twoPlayerButton.hide();
}

function selectMultiplayer() {
  multiplayer = true; // Multiplayer mode
  playButton.show(); // Show the play button
  showControls = true;
  playerChoiceMade = true;
  onePlayerButton.hide();
  twoPlayerButton.hide();
}

function newGame() {
  leftScore = 0;
  rightScore = 0;
  rightColor = 'lightblue';
  gamePlaying = false;
  gameStarted = false;
  showControls = false;
  multiplayer = false;
  playerChoiceMade = false;
  playButton.hide();
  newGameButton.hide();
  setup();
  onePlayerButton.show();
  twoPlayerButton.show();
}



// Function to display large, repeating text
function displayRepeatingText(t) {
  textSize(40);
  for (let y = 15; y < height + 40; y += 40) {
    // for (let x = 0; x < width; x += 300) {
      fill('white')
      text(t, width / 2, y);
    // }
  }
}

function styleButton(b) {
  b.style('background-color', '#white');
  b.style('color', 'black');
  b.style('font-size', '20px');
  b.style('border', 'none');
  b.style('padding', '10px 20px');
  b.style('border-radius', '10px');
  b.style('cursor', 'pointer');
  b.mouseOver(() => b.style('background-color', '#lightgrey'));
}


class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 60;
    this.speed = 8;
    this.skipChance = 0.025;
    this.skipCount = 0;
  }

  show() {
    if (multiplayer) {
      rightColor = 'lightblue';
    } else {
      rightColor = 'pink';
    }
    fill(this === leftPaddle ? 'lightgreen' : rightColor);

    // fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (!gamePlaying) {
      return;
    }
    if (this === leftPaddle) {
      if (keyIsDown(69) && this.y > 0) this.y -= this.speed; // W key
      if (keyIsDown(68) && this.y < height - this.height) this.y += this.speed; // S key
    } else if (this === rightPaddle) {
      if (multiplayer) {
        if (keyIsDown(73) && this.y > 0) this.y -= this.speed; // Up arrow
      if (keyIsDown(75) && this.y < height - this.height) this.y += this.speed; // Down arrow
      } else {
        if (ballSpeedX < 8) {
          this.skipCount = 0;
        }
        if (this.skipCount > 0) {
          this.skipCount--;
            return;
        } else if (random() < this.skipChance && ballSpeedX >= 10) {
          // Occasionally skip a frame to simulate "hesitation"
          this.skipCount = 25;
          return;
        }
        
        // Predict the ball's future position slightly ahead to make AI better
        let targetY = ballY + ballSpeedY * 10 + random(-10, 0); 

        // Smoothly interpolate the paddle’s y position towards the targetY
        // this.y = lerp(this.y, targetY - this.height / 2, 0.15);
        
        // Calculate the difference between current y and target y
    let distance = targetY - this.height / 2 - this.y;

    let deadZone = 30; // Only move if the distance exceeds 5 units
    if (abs(distance) > deadZone) {
        // Constrain the movement to the paddle's max speed (8 units)
        let step = constrain(distance, -this.speed, this.speed);

        // Update the paddle's position smoothly
        this.y += step;
    }

        // Ensure the paddle stays within canvas bounds
        this.y = constrain(this.y, 0, height - this.height);
      }
      
    }
  }
}
