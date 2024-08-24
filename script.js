const offerOneButton = document.getElementById("offer-1");
const offerOneButtonHidden = document.getElementById("offer-2");
const offerTwoButton = document.getElementById("offer-3");
const offerTwoButtonHidden = document.getElementById("offer-4");
const offerThreeButton = document.getElementById("offer-5");
const offerThreeButtonHidden = document.getElementById("offer-6");

const itemTwo = document.getElementById("item-2");
const itemThree = document.getElementById("item-3");
const itemFour = document.getElementById("item-4");

const hiddenOne = document.getElementsByClassName("expanded-1")[0];
const hiddenTwo = document.getElementsByClassName("expanded-2")[0];
const hiddenThree = document.getElementsByClassName("expanded-3")[0];

const billElement = document.getElementsByClassName("bill-strong")[0];

itemThree.style.display = "None";
hiddenTwo.style.display = "flex";

offerOneButton.addEventListener("click", (e) => {
  itemTwo.style.display = "None";
  if (hiddenTwo.style.display != "None") {
    hiddenTwo.style.display = "None";
    itemThree.style.display = "flex";
  }
  if (hiddenThree.style.display != "None") {
    hiddenThree.style.display = "None";
    itemFour.style.display = "flex";
  }
  hiddenOne.style.display = "flex";
  billElement.innerText = "Total: $18.00 USD";
});

offerTwoButton.addEventListener("click", (e) => {
  itemThree.style.display = "None";
  if (hiddenOne.style.display != "None") {
    hiddenOne.style.display = "None";
    itemTwo.style.display = "flex";
  }
  if (hiddenThree.style.display != "None") {
    hiddenThree.style.display = "None";
    itemFour.style.display = "flex";
  }
  hiddenTwo.style.display = "flex";
  billElement.innerText = "Total: $24.00 USD";
});

offerThreeButton.addEventListener("click", (e) => {
  itemFour.style.display = "None";
  if (hiddenOne.style.display != "None") {
    hiddenOne.style.display = "None";
    itemTwo.style.display = "flex";
  }
  if (hiddenTwo.style.display != "None") {
    hiddenTwo.style.display = "None";
    itemThree.style.display = "flex";
  }
  hiddenThree.style.display = "flex";
  billElement.innerText = "Total: $36.00 USD";
});
