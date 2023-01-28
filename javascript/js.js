function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}

let inputFields = [
  {
    quantity: document.querySelector(".quantity1"),
    glitter: document.querySelector(".glitter1"),
    darksteel: document.querySelector(".darksteel1"),
    copper: document.querySelector(".copper1"),
  },
  {
    quantity: document.querySelector(".quantity2"),
    glitter: document.querySelector(".glitter2"),
    darksteel: document.querySelector(".darksteel2"),
    copper: document.querySelector(".copper2"),
  },
  {
    quantity: document.querySelector(".quantity3"),
    glitter: document.querySelector(".glitter3"),
    darksteel: document.querySelector(".darksteel3"),
    copper: document.querySelector(".copper3"),
  },
];

document.querySelector("#compute").addEventListener("click", function () {
  let rarity = document.querySelector("#rarity").value;
  let glitterMultiplier, darksteelMultiplier, copperMultiplier;
  if (rarity === "Epic") {
    glitterMultiplier = 25;
    darksteelMultiplier = 5000;
    copperMultiplier = 20000;
  } else if (rarity === "Legendary") {
    glitterMultiplier = 125;
    darksteelMultiplier = 25000;
    copperMultiplier = 100000;
  }

  let totalGlitter = 0;
  let totalDarksteel = 0;
  let totalCopper = 0;

  inputFields.forEach((field) => {
    let quantity = Number(field.quantity.value);
    field.glitter.innerHTML = quantity * glitterMultiplier;
    field.darksteel.innerHTML = quantity * darksteelMultiplier;
    field.copper.innerHTML = quantity * copperMultiplier;
    totalGlitter += Number(field.glitter.innerHTML);
    totalDarksteel += Number(field.darksteel.innerHTML);
    totalCopper += Number(field.copper.innerHTML);
  });

  document.querySelector(".totalglitter").innerHTML =
    totalGlitter.toLocaleString("en-US");
  document.querySelector(".totaldarksteel").innerHTML =
    totalDarksteel.toLocaleString("en-US");
  document.querySelector(".totalcopper").innerHTML =
    totalCopper.toLocaleString("en-US");
});
