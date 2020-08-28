const inventoryList = document.querySelector("#inventory-list");
const myItems = document.querySelector("#my-item-list");

const myItemsSpace = 9;
const inventorySpace = 27;

const diamonds = 10;
const apples = 5;

(function createInventorySpace() {
  for(var i = 0; i< inventorySpace; i++) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add(`${i+1}`)
    li.append(div);
    inventoryList.append(li);
  }
} ());

const inventorySpayce = document.querySelectorAll("#inventory-list li div");

(function createMyItemsSpace() {
  for(var i = 0; i< myItemsSpace; i++) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add(`${i+1}`)
    li.append(div);
    myItems.append(li);
  }
} ());

const myItemSpace = document.querySelectorAll("#my-item-list li div");

(function createItem() {
    const diamond= document.createElement("img");
    diamond.setAttribute('src', "https://vignette.wikia.nocookie.net/minecraft/images/2/2f/New_DiamondB.png/revision/latest/top-crop/width/300/height/300?cb=20190520094830");
    myItemSpace[0].append(diamond);

    const apple = document.createElement("img");
    apple.setAttribute('src', "https://vignette.wikia.nocookie.net/minecraftfanon/images/e/ed/Enchanted_Golden_Apple_JE2_BE2.gif/revision/latest?cb=20200428190409");
    myItemSpace[1].append(apple);
} ());
