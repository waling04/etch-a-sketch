const container = document.querySelector(".container");

// let's make grid first!
function makeGrid(rows, columns) {
  container.innerHTML = "";
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  for (let c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    cell.className = "grid-item";
    cell.textContent = "";
    cell.style.width = `${500 / columns}px`;
    cell.style.height = `${500 / rows}px`;
    container.appendChild(cell);
  }
  addEventListenerToGridItem();
}

//and we set the default of our grid to 16 x 16 
makeGrid(16, 16);

// Right here we make a function when we click and drag mouse to any grid-item
// inside that grid-item, the background will change from no color to BlACK!
function addEventListenerToGridItem() {
  const gridItems = document.querySelectorAll(".grid-item");
  let isClicked = false;
  function mouseEnter(e) {
    if (isClicked) {
      e.target.style.backgroundColor = "black";
    }
  }

  function mouseLeave(e) {
    if (isClicked) {
      e.target.style.backgroundColor = "black";
    }
  }

  function mouseDown(e) {
    isClicked = true;
    e.target.style.backgroundColor = "black";
  }

  function mouseUp(e) {
    isClicked = false;
  }

  gridItems.forEach(function (item) {
    item.addEventListener("mousedown", mouseDown);
    item.addEventListener("mouseup", mouseUp);
    item.addEventListener("mouseenter", mouseEnter);
    item.addEventListener("mouseleave", mouseLeave);
  });
}

//this function will remove color we added by click and drag mouse to that grid-item
function removeEventListenerFromGridItem() {
  const gridItems = document.querySelectorAll(".grid-item");
  let isClicked = false;
  function mouseEnter(e) {
    if (isClicked) {
      e.target.style.backgroundColor = "";
    }
  }

  function mouseLeave(e) {
    if (isClicked) {
      e.target.style.backgroundColor = "";
    }
  }

  function mouseDown(e) {
    isClicked = true;
    e.target.style.backgroundColor = "";
  }

  function mouseUp(e) {
    isClicked = false;
  }

  gridItems.forEach(function (item) {
    item.addEventListener("mousedown", mouseDown);
    item.addEventListener("mouseup", mouseUp);
    item.addEventListener("mouseenter", mouseEnter);
    item.addEventListener("mouseleave", mouseLeave);
  });
}

//this function will change the grid-item's background to RAINBOW color!
//by click and drag mouse to grid-item!
function drawRainbowToGridItem() {
  const gridItems = document.querySelectorAll(".grid-item");
  let isClicked = false;
  function mouseEnter(e) {
    if (isClicked) {
      e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    }
  }

  function mouseLeave(e) {
    if (isClicked) {
      e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    }
  }

  function mouseDown(e) {
    isClicked = true;
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }

  function mouseUp(e) {
    isClicked = false;
  }

  gridItems.forEach(function (item) {
    item.addEventListener("mousedown", mouseDown);
    item.addEventListener("mouseup", mouseUp);
    item.addEventListener("mouseenter", mouseEnter);
    item.addEventListener("mouseleave", mouseLeave);
  });
}


//this function for reset grid to default (no color!)
function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "";
  });
}

const gridBtn16 = document.querySelector(".gridBtn1");
const gridBtn32 = document.querySelector(".gridBtn2");
const gridBtn64 = document.querySelector(".gridBtn3");
const clear = document.querySelector(".clear");
const erase = document.querySelector(".erase");
const drawBlack = document.querySelector(".drawBlack");
const drawRainbow = document.querySelector(".drawRainbow");

gridBtn16.addEventListener("click", function () {
  makeGrid(16, 16);
});
gridBtn32.addEventListener("click", function () {
  makeGrid(32, 32);
});
gridBtn64.addEventListener("click", function () {
  makeGrid(64, 64);
});

clear.addEventListener("click", clearGrid);
erase.addEventListener("click", removeEventListenerFromGridItem);
drawBlack.addEventListener("click", addEventListenerToGridItem);
drawRainbow.addEventListener("click", drawRainbowToGridItem);
