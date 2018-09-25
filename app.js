class CatClick {
  constructor() {
    this.count = 0;
  }

  init() {
    let catEl = document.querySelector(".cat-img");
    // initialize counts to show to be zero
    this.getCountEL().innerHTML = this.count;
    catEl.addEventListener("click", () => {
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
