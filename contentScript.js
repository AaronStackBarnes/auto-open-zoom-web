/************* CONSTANTS *************/

const name = "Aaron Stack";

/*************** MAIN ****************/
window.addEventListener("load", function (event) {

  const container = document.querySelectorAll('h3[role="presentation"]')[0]
    .parentElement;

  if (!container) {
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `<a id="findMe" web_client="" tabindex="0">Join from Your Browser</a>`;
  container.appendChild(div);
  document.getElementById("findMe").click();

  const nameInput = document.getElementById("inputname");
  if (!nameInput.value && name) {
    nameInput.value = name;
  }
});
