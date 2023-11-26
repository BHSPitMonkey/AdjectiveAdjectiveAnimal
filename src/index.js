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

const delimiterTypes = { none: "", space: " ", hyphen: "-" };
window.repopulateList = () => {
  const list = document.getElementById("list");
  const size = 36;
  list.innerHTML = "";

  const form = document.getElementById("options");
  const delimiter = delimiterTypes[form.elements["delimiter"].value];
  let adjectiveCount = form.elements["count"].value;
  if (adjectiveCount < 1) adjectiveCount = 1;
  if (adjectiveCount > 3) adjectiveCount = 3;
  const capitalize = !!form.elements["capitalize"].checked;

  for (let i = 0; i < size; i++) {
    let li = document.createElement("li");
    li.innerText = generateCombination(adjectiveCount, delimiter, true);
    if (!capitalize) {
      li.innerText = li.innerText.toLowerCase();
    }
    li.addEventListener("click", clickHandler);
    list.appendChild(li);
  }
};
window.repopulateList();

// Options form
const inputs = [
  ...document.getElementsByTagName("input"),
  ...document.getElementsByTagName("select"),
];
inputs.forEach((element) => {
  element.addEventListener("change", () => {
    window.repopulateList();
  });
});
document.getElementById("regenerate").addEventListener("click", (event) => {
  event.preventDefault();
  window.repopulateList();
});

// Update the favicon for fun
const animals =
  "🐵🐒🦍🦧🐶🐕🦮🐕‍🦺🐩🐺🦊🦝🐱🐈🐈‍⬛🦁🐯🐅🐆🐴🫎🫏🐎🦄🦓🦌🦬🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿️🦫🦔🦇🐻🐻‍❄️🐨🐼🦥🦦🦨🦘🦡🦃🐔🐓🐣🐤🐥🐦🐧🕊️🦅🦆🦢🦉🦤🪶🦩🦚🦜🪽🐦‍⬛🪿🪹🪺🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦭🐟🐠🐡🦈🐙🐚🪸🪼🦀🦞🦐🦑🦪🐌🦋🐛🐜🐝🪲🐞🦗🪳🕷️🕸️🦂🦟🪰🪱🦠";
const animalsArray = [...animals];
const animal = animalsArray[Math.floor(Math.random() * animalsArray.length)];
const link = document.createElement("link");
link.rel = "icon";
link.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${animal}</text></svg>`;
document.head.appendChild(link);
