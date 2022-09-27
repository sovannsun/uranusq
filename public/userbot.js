const togglerRapterXBot = document.getElementById("togglerRapterXBot");
const RapterXBot = document.getElementById("RapterXBot");
const Rapbotactive = document.getElementById("Rapbotactive");

togglerRapterXBot.addEventListener("change", () => {
  if (togglerRapterXBot.checked) {
    RapterXBot.innerHTML = `Running`;
    Rapbotactive.style.background =
      "linear-gradient(90deg, rgba(2,170,176,1) 0%, rgba(0,205,172,1) 50%)";
    Rapbotactive.style.color = "#fff";
    Rapbotactive.style.border = "1px solid #fff";
  } else {
    RapterXBot.innerHTML = `Inactive`;
    Rapbotactive.style.background = "";
    Rapbotactive.style.color = "";
    Rapbotactive.style.border = "";
  }
});

const togglerHydraBot = document.getElementById("togglerHydraBot");
const HydraBot = document.getElementById("HydraBot");
const Hydrabotactive = document.getElementById("Hydrabotactive");

togglerHydraBot.addEventListener("change", () => {
  if (togglerHydraBot.checked) {
    HydraBot.innerHTML = `Running`;
    Hydrabotactive.style.background =
      "linear-gradient(90deg, rgba(2,170,176,1) 0%, rgba(0,205,172,1) 50%)";
    Hydrabotactive.style.color = "#fff";
    Hydrabotactive.style.border = "1px solid #fff";
  } else {
    HydraBot.innerHTML = `Inactive`;
    Hydrabotactive.style.background = "";
    Hydrabotactive.style.color = "";
    Hydrabotactive.style.border = "";
  }
});
