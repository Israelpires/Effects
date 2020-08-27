const listDraggable = document.querySelector("#container");
const circle = document.querySelector("#circle");
const lixeira = document.querySelector("#lixeira");

listDraggable.addEventListener("mousedown", showTarget, false);
listDraggable.addEventListener("mouseup", drop, false);

listDraggable.addEventListener("mousemove", showMovement, false);
lixeira.addEventListener("mouseover", deleteItem);
lixeira.addEventListener("mouseout", deleteItemFalse);

var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var isActive = false;
var isDelete = false;

function showTarget(e) {
  console.log(e.target);
  console.log(e.clientX - xOffset);
  console.log(e.clientY - yOffset);
  console.log(e.type);
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if(e.target === circle) {
    console.log(isActive);
    isActive = true;
  }
}

function drop() {
  if(isDelete) {
    circle.style.display = "none";
  }
  initialX = currentX;
  initialY = currentY;

  isActive = false;
  console.log(xOffset);
  console.log(yOffset);
}

function showMovement(e) {
  if(isActive) {
    e.preventDefault();
    console.log(e.clientX - xOffset);
    console.log(e.clientY - yOffset);
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, circle);
  }
}

function deleteItem(e) {
  if(isActive) {
    isDelete = true;
  }
}

function deleteItemFalse() {
  isDelete = false;
}

function setTranslate (xPos, yPos, elem) {
  elem.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`
}