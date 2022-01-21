/************* CONSTANTS *************/

const name;

/*************** MAIN ****************/
window.addEventListener("load", function (event) {
  const div = document.createElement("div");
  div.innerHTML = `<a id="findMe" web_client="" tabindex="0">Join from Your Browser</a>`;
  document.getElementsByClassName("zI5ZBcpf")[0].appendChild(div);
  document.getElementById("findMe").click();

  const nameInput = document.getElementById("inputname");
  if (!nameInput.value && name) {
    nameInput.value = config.name;
  }
});
