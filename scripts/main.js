const PYRAMID = {
  boxes: document.querySelectorAll(".pyramid_box"),
  generate_new_numbers: function () {
    let numbers = [];
    numbers.push(1);
    numbers.push(1);
    numbers.push(1);
    numbers.push(1);
    numbers.push(1);
    numbers.push(1);
    numbers.push(1);
    return numbers;
  },
  init: function () {
    var numbers = this.generate_new_numbers();
    for (let x = 0; x <= 7; x++) {
      this.boxes[x].innerText = "x";
    }
  },
};
PYRAMID.init();
