const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const carousel = document.querySelector("#slick-group");
const slickButtonsUl = document.querySelector("#slick-buttons");

const carouselElementsCount = carousel.childElementCount;

var xPos = 0;
var index = 1;

previousButton.addEventListener("mousedown", previous, false);
nextButton.addEventListener("mousedown", next, false);


(function slickButtons() {
  for(var i = 0; i< carouselElementsCount; i++) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.setAttribute('index', `${i+1}`)
    li.append(button);
    slickButtonsUl.appendChild(li);
  }
} ());


const slickButtonsLi = document.querySelectorAll("#slick-buttons li");
slickButtonsLi.forEach(e => e.addEventListener("mousedown", goto, false));

function activateStickButton(previousIndex) {
  const buttons = document.querySelectorAll("#slick-buttons li button");
  var buttonNumber = 0;
  buttons[previousIndex].classList.remove("active");
  for(var i = 0; i< carouselElementsCount; i++) {
    if(buttons[i].getAttribute("index") === String(index)) {
      buttonNumber = i;
    }
  }

  buttons[buttonNumber].classList.add("active");
};

activateStickButton(0);

function previous() {
  var previousIndex = index - 1;
  if(index === 1) {
    index = carouselElementsCount;
    xPos = (carouselElementsCount - 1) * -1600;
    carousel.style.transform = `translate3d(${xPos}px, 0px, 0)`;
    carousel.style.transition = "500ms";
    activateStickButton(previousIndex);
  } else {
    xPos += 1600;
    index -= 1;
    carousel.style.transform = `translate3d(${xPos}px, 0px, 0)`;
    carousel.style.transition = "500ms";
    activateStickButton(previousIndex);
  }
};

function next() {
  var previousIndex = index - 1;
  console.log(index);
  if(index === carouselElementsCount) {
    index = 1;
    xPos = 0;
    carousel.style.transform = `translate3d(0px, 0px, 0)`;
    carousel.style.transition = "500ms";
    activateStickButton(previousIndex);
  }else {
    xPos -= 1600;
    index += 1;
    carousel.style.transform = `translate3d(${xPos}px, 0px, 0)`;
    carousel.style.transition = "500ms";
    activateStickButton(previousIndex);
  }
};

function goto(e) {
  console.log(index);
  console.log(e.target.getAttribute("index"));
  if (index !== e.target.getAttribute("index") && e.target.getAttribute("index") !== null ) {  
    var offset = index - Number(e.target.getAttribute("index"));
    var previousIndex = index - 1;
    index = Number(e.target.getAttribute("index"));
    x = offset * 1600;
    xPos += x;
    carousel.style.transform = `translate3d(${xPos}px, 0px, 0)`;
    carousel.style.transition = "500ms";
    activateStickButton(previousIndex);
  } 
}