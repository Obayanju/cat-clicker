class Cat {
  constructor(name) {
    this.name = name;
    this.clicks = 0;
    this.catInitialized = false;
    this.listener = null;
  }

  addListener() {
    const catImgPath = `images/${this.getName()}.jpg`;
    let cat = document.querySelector(`.cat-image img[src='${catImgPath}']`);
    // an anonymous funtion as the listener wouldn't be appropriate
    // because we won't be able to remove the event listener in the future
    const listener = this.handleEvent.bind(this);
    this.listener = listener;
    cat.addEventListener("click", this.listener);
  }

  removeListener() {
    let cat = this.getImageEl();
    cat.removeEventListener("click", this.listener);
  }

  handleEvent() {
    this.updateClicks();
    this.updateClickInDOM();
  }

  getImageEl() {
    const catImgPath = `images/${this.getName()}.jpg`;
    let cat = document.querySelector(`.cat-image img[src='${catImgPath}']`);
    return cat;
  }

  getImageParentEl() {
    let cat = document.querySelector(".cat-image");
    return cat;
  }

  getCountEL() {
    let clicksEl = document.querySelector(".clicks span");
    return clicksEl;
  }

  getName() {
    return this.name;
  }

  getClicks() {
    return this.clicks;
  }

  updateClicks() {
    this.clicks += 1;
  }

  updateClickInDOM() {
    this.getCountEL().innerHTML = this.getClicks();
  }
}

class CatContainer {
  constructor() {
    this.previousCat = null;
  }

  init() {
    let catButtons = document.querySelectorAll("button");
    const catNames = ["biodun", "Bola", "Idowu", "Ola", "Zoe"];
    const cats = [];
    catNames.forEach(name => {
      let cat = new Cat(name);
      cats.push(cat);
    });
    catButtons.forEach((button, index) => {
      button.onclick = () => {
        if (this.previousCat) {
          this.previousCat.removeListener();
        }
        this.displayInfo(cats[index]);
      };
    });
  }

  displayInfo(cat) {
    // get the clicks Element
    let clicksEl = document.querySelector(".cat-info .clicks span");
    clicksEl.innerHTML = cat.getClicks();
    // get the cat name Element
    let nameEl = document.querySelector(".cat-name");
    nameEl.innerHTML = cat.getName();
    // get the cat image Element and change its src attribute
    let catImg = document.querySelector(".cat-image img");
    catImg.src = `images/${cat.getName()}.jpg`;
    cat.addListener();
    // store reference of the previous cat to remove its listener later
    this.previousCat = cat;
  }
}

let catContainer = new CatContainer();
catContainer.init();
