import { generateCombination } from "gfycat-style-urls";

function clickHandler(event) {
  navigator.clipboard.writeText(event.target.innerText).then(
    () => {
      console.log("Copied to clipboard");
      event.target.classList.add('copied');
      setTimeout(() => {
        event.target.classList.remove('copied');
      }, 5000);
    },
    () => {
      console.error("Failed to copy to clipboard");
    }
  );
}

function populateList() {
  const list = document.getElementById("list");
  const size = 36;
  list.innerHTML = '';

  for (let i = 0; i < size; i++) {
    let li = document.createElement("li");
    li.innerText = generateCombination(2, "", true);
    li.addEventListener('click', clickHandler);
    list.appendChild(li);
  }
}

populateList();

window.populateList = populateList;