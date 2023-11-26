import { generateCombination } from "gfycat-style-urls";

function clickHandler(event) {
  navigator.clipboard.writeText(event.target.innerText).then(
    () => {
      console.log("Copied to clipboard");
      event.target.classList.add("copied");
      setTimeout(() => {
        event.target.classList.remove("copied");
      }, 5000);
    },
    () => {
      console.error("Failed to copy to clipboard");
    }
  );
}

window.repopulateList = () => {
  const list = document.getElementById("list");
  const size = 36;
  list.innerHTML = "";

  for (let i = 0; i < size; i++) {
    let li = document.createElement("li");
    li.innerText = generateCombination(2, "", true);
    li.addEventListener("click", clickHandler);
    list.appendChild(li);
  }
}
window.repopulateList();

// Update the favicon for fun
const animals = '🐵🐒🦍🦧🐶🐕🦮🐕‍🦺🐩🐺🦊🦝🐱🐈🐈‍⬛🦁🐯🐅🐆🐴🫎🫏🐎🦄🦓🦌🦬🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿️🦫🦔🦇🐻🐻‍❄️🐨🐼🦥🦦🦨🦘🦡🦃🐔🐓🐣🐤🐥🐦🐧🕊️🦅🦆🦢🦉🦤🪶🦩🦚🦜🪽🐦‍⬛🪿🪹🪺🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦭🐟🐠🐡🦈🐙🐚🪸🪼🦀🦞🦐🦑🦪🐌🦋🐛🐜🐝🪲🐞🦗🪳🕷️🕸️🦂🦟🪰🪱🦠';
const animalsArray = [...animals];
const animal = animalsArray[Math.floor(Math.random() * animalsArray.length)];
const link = document.createElement('link');
link.rel = 'icon';
link.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${animal}</text></svg>`;
document.head.appendChild(link);
