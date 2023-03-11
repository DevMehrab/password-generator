let slider = document.querySelector(".slider");
let show = document.querySelector(".show");
let generateBtn = document.querySelector(".generate");
let lengthDiv = document.querySelector(".length");
let check = document.querySelector(".check-area");
let icon = check.querySelectorAll("i");
let bulbs = document.querySelector(".bulbs");
let icon2 = bulbs.querySelectorAll("i");
let messege = document.querySelector(".messege");
let copyBtn = document.querySelector(".bx-copy-alt");

let lengthRange = parseInt(lengthDiv.innerHTML);
let strengthNum = 1;
let optionsChecked = 0;
let passwordArray = [];
icon.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.classList.toggle("bxs-check-square");
    checkOptions(e.target);
  });
});

icon.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (el.classList[3] === "bxs-check-square") {
      optionsChecked++;
    } else {
      optionsChecked--;
    }
    strength();
    console.log(optionsChecked);
  });
});

slider.addEventListener("input", () => {
  lengthDiv.innerHTML = slider.value;
});

let charecters = {
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbols: [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "/",
    "?",
    "|",
  ],
};

function checkOptions(i) {
  if (i.classList[2] === "bxs-check-square") {
    console.log(true);
  }
}

generateBtn.addEventListener("click", () => {
  passwordArray = [];
  let range = parseInt(lengthDiv.innerHTML);
  icon.forEach((el) => {
    if (el.classList[3] === "bxs-check-square") {
      randomIndex(
        range,
        optionsChecked,
        charecters[el.classList[0]].length,
        el.classList[0]
      );
      strength();
    }
    
  });
  
});
function randomIndex(range, optionsChecked, char, opt) {
  for (let i = 0; i < range / optionsChecked; i++) {
    let rnd = Math.floor(Math.random() * char);
    passwordArray.push(charecters[opt][rnd]);
  }
  // console.log(passwordArray, optionsChecked,range,char);

  let unsortedArray = unsortArray(passwordArray);
  if (range === unsortedArray.length) {
    show.innerHTML = unsortedArray.join("");
  } else {
    let newArr = unsortedArray.slice(0, range);
    show.innerHTML = newArr.join("");
  }
}

function unsortArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function strength(params) {
  if (optionsChecked === 1) {
    strengthNum = 1;
  }
  if (optionsChecked === 2) {
    strengthNum = 1;
  }
  if (optionsChecked === 3) {
    strengthNum = 2;
  }
  if (optionsChecked ===4) {
    strengthNum = 3;
  }
  for (let i = 0; i < strengthNum; i++) {
    icon2[i].classList.add("active");
  }
}
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(show.innerHTML);
    messege.style.visibility = "visible"
    setTimeout(() => {
      messege.style.visibility = "hidden"
    },2000)
})