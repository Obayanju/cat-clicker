class CatClick {
  constructor() {
    this.count = 0;
  }

  init() {
    let cats = document.querySelector(".cats");
    // initialize counts to show to be zero
    this.getCountEL().innerHTML = this.count;
    cats.addEventListener("click", () => {
      this.updateCount();
    });
  }

  getCountEL() {
    let clicksEl = document.querySelector(".clicks span");
    return clicksEl;
  }

  updateCount() {
    this.count += 1;
    this.getCountEL().innerHTML = this.count;
  }
}

let catClick = new CatClick();
catClick.init();
