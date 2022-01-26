/************* CONSTANTS *************/

const name = "Aaron Stack";

/*************** MAIN ****************/
window.addEventListener("load", function (event) {
  let launchButton = [...document.querySelectorAll('[role="button"]')].filter(
    (b) => b?.innerText === "Launch Meeting"
  )[0];

  if (!launchButton) {
    return;
  }

  launchButton.click();

  setTimeout(() => {
    let webButton = [...document.querySelectorAll("a")].filter(
      (b) => b?.innerText === "Join from Your Browser"
    )[0];

    webButton.click();

    const nameInput = document.getElementById("inputname");
    if (!nameInput.value && name) {
      nameInput.value = name;
    }
  }, 5);
});
