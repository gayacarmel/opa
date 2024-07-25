let reds, browns, greens, oranges, purples, yellows;
let colors;
let font;

function preload() {
  reds = loadJSON('red.json');
  browns = loadJSON('brown.json');
  greens = loadJSON('green.json');
  oranges = loadJSON('orenge.json');
  purples = loadJSON('perple.json');
  yellows = loadJSON('yellow.json');
  font= loadFont("EditorSans-Book.otf");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(RGB);
  background(255);
  // frameRate(100);
  textFont(font);
  
  

  colors = [
    color(197, 0, 0),       // צבע לקבוצה 1
    color(137, 94, 54),     // צבע לקבוצה 2
    color(67, 186, 20),     // צבע לקבוצה 3
    color(255, 122, 0),     // צבע לקבוצה 4
    color(61, 0, 109),      // צבע לקבוצה 5
    color(227, 205, 0)      // צבע לקבוצה 6
  ];
}

function draw() {
  let x = random(windowWidth);
  let y = random(windowHeight);
  let myText, colorIndex;

  let randomGroup = int(random(6)); // בחר קבוצה רנדומלית בין 0 ל-5

  switch(randomGroup) {
    case 0:
      if (reds.words && reds.words.length > 0) {
        myText = random(reds.words); // הנח ש-words הוא המפתח בקובץ JSON שמכיל את המילים
        colorIndex = 0;
      }
      break;
    case 1:
      if (browns.words && browns.words.length > 0) {
        myText = random(browns.words);
        colorIndex = 1;
      }
      break;
    case 2:
      if (greens.words && greens.words.length > 0) {
        myText = random(greens.words);
        colorIndex = 2;
      }
      break;
    case 3:
      if (oranges.words && oranges.words.length > 0) {
        myText = random(oranges.words);
        colorIndex = 3;
      }
      break;
    case 4:
      if (purples.words && purples.words.length > 0) {
        myText = random(purples.words);
        colorIndex = 4;
      }
      break;
    case 5:
      if (yellows.words && yellows.words.length > 0) {
        myText = random(yellows.words);
        colorIndex = 5;
      }
      break;
  }

  if (myText) {
    let w = textWidth(myText);

    fill(colors[colorIndex]);
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = color(255);

    noStroke();
    rect(x, y, w + 40, 50, 20);
    textSize(30);
    fill(255);
    text(myText, x + 20, y + 35);
  }
}
