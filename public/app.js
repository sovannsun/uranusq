const toggler = document.querySelector(".toggler");
const spotPrice = document.getElementById("spot-price");
const futurePrice = document.getElementById("future-price");
const memberPrice = document.getElementById("member-price");
const packagelife1 = document.getElementById("packagelife1");
const packagelife2 = document.getElementById("packagelife2");
const packagelife3 = document.getElementById("packagelife3");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    spotPrice.innerHTML = `$35<span>/Monthly</span>`;
    futurePrice.innerHTML = `$50<span>/Monthly</span>`;
    memberPrice.innerHTML = `$70<span>/Monthly</span>`;
    packagelife1.setAttribute("value", "Monthly");
    packagelife2.setAttribute("value", "Monthly");
    packagelife3.setAttribute("value", "Monthly");
  } else {
    spotPrice.innerHTML = `$200<span>/Yearly</span>`;
    futurePrice.innerHTML = `$300<span>/Yearly</span>`;
    memberPrice.innerHTML = `$400<span>/Yearly</span>`;
    packagelife1.setAttribute("value", "Yearly");
    packagelife2.setAttribute("value", "Yearly");
    packagelife3.setAttribute("value", "Yearly");
  }
});
