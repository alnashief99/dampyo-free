function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}

let quantity1 = document.querySelector(".quantity1");
let quantity11 = Number(quantity1.value);
let glitter1 = document.querySelector(".glitter1");
let darksteel1 = document.querySelector(".darksteel1");
let copper1 = document.querySelector(".copper1");

let quantity2 = document.querySelector(".quantity2");
let quantity22 = Number(quantity1.value);
let glitter2 = document.querySelector(".glitter2");
let darkstee22 = document.querySelector(".darksteel2");
let copper2 = document.querySelector(".copper2");

let quantity3 = document.querySelector(".quantity3");
let quantity33 = Number(quantity1.value);
let glitter3 = document.querySelector(".glitter3");
let darkstee33 = document.querySelector(".darksteel3");
let copper3 = document.querySelector(".copper3");

document.querySelector("#compute").addEventListener("click", function () {
  let rarity1 = document.querySelector("#rarity").value;
  if (rarity1 == "Epic") {
    quantity11 = Number(quantity1.value);
    glitter1.innerHTML = quantity11 * 25;
    copper1.innerHTML = quantity11 * 20000;
    darksteel1.innerHTML = quantity11 * 5000;
    quantity22 = Number(quantity2.value);
    glitter2.innerHTML = quantity22 * 25;
    copper2.innerHTML = quantity22 * 20000;
    darkstee22.innerHTML = quantity22 * 5000;
    quantity33 = Number(quantity3.value);
    glitter3.innerHTML = quantity33 * 25;
    copper3.innerHTML = quantity33 * 20000;
    darkstee33.innerHTML = quantity33 * 5000;
  } else if (rarity1 == "Legendary") {
    quantity11 = Number(quantity1.value);
    glitter1.innerHTML = quantity11 * 125;
    copper1.innerHTML = quantity11 * 100000;
    darksteel1.innerHTML = quantity11 * 25000;
    quantity22 = Number(quantity2.value);
    glitter2.innerHTML = quantity22 * 125;
    copper2.innerHTML = quantity22 * 100000;
    darkstee22.innerHTML = quantity22 * 25000;
    quantity33 = Number(quantity3.value);
    glitter3.innerHTML = quantity33 * 125;
    copper3.innerHTML = quantity33 * 100000;
    darkstee33.innerHTML = quantity33 * 25000;
  }
});

let totalGlitter = document.querySelector(".totalglitter").innerHTML;
let totalDarksteel = document.querySelector(".totaldarksteel").innerHTML;
let totalCopper = document.querySelector(".totalcopper").innerHTML;

document.querySelector("#compute").addEventListener("click", function () {
  let overglit = (document.querySelector(".totalglitter").innerHTML =
    Number(glitter1.innerHTML) +
    Number(glitter2.innerHTML) +
    Number(glitter3.innerHTML));

  document.querySelector(".totalglitter").innerHTML =
    overglit.toLocaleString("en-US");

  let overds = (document.querySelector(".totaldarksteel").innerHTML =
    Number(darksteel1.innerHTML) +
    Number(darkstee22.innerHTML) +
    Number(darkstee33.innerHTML));

  document.querySelector(".totaldarksteel").innerHTML =
    overds.toLocaleString("en-US");

  let overcopper = (document.querySelector(".totalcopper").innerHTML =
    Number(copper1.innerHTML) +
    Number(copper2.innerHTML) +
    Number(copper3.innerHTML));

  document.querySelector(".totalcopper").innerHTML =
    overcopper.toLocaleString("en-US");
});
