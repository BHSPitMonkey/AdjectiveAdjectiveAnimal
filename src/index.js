import { generateCombination } from "gfycat-style-urls";

// Handler for when a name is clicked
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

// Update the favicon for fun
function updateEmoji(tries = 10) {
  const animals =
    "🐵🐒🦍🦧🐶🐕🦮🐕‍🦺🐩🐺🦊🦝🐱🐈🐈‍⬛🦁🐯🐅🐆🐴🫎🫏🐎🦄🦓🦌🦬🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿️🦫🦔🦇🐻🐻‍❄️🐨🐼🦥🦦🦨🦘🦡🦃🐔🐓🐣🐤🐥🐦🐧🕊️🦅🦆🦢🦉🦤🪶🦩🦚🦜🪽🐦‍⬛🪿🪹🪺🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦭🐟🐠🐡🦈🐙🐚🪸🪼🦀🦞🦐🦑🦪🐌🦋🐛🐜🐝🪲🐞🦗🪳🕷️🕸️🦂🦟🪰🪱🦠";
  const animalsArray = [...animals];
  const animal = animalsArray[Math.floor(Math.random() * animalsArray.length)];
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${animal}</text></svg>`;
  document.head.appendChild(link);

  const emojiHolder = document.getElementById("emoji-holder");
  emojiHolder.innerText = animal;
  if (emojiHolder.getBoundingClientRect().width == 0) {
    if (tries > 0) {
      // Try again
      console.log("Chosen emoji seemingly unsupported; Trying another", animal);
      updateEmoji(tries - 1);
    } else {
      console.warning("Unable to render emoji as expected :(", animal);
    }
  }
}

// (Re)generate names and update list
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
  form.elements["count"].value = adjectiveCount;
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

  updateEmoji();
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

// Regenerate links/buttons
const regenerateButtons = [
  document.getElementById("regenerate"),
  document.getElementById("regenerate-link"),
];
regenerateButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.repopulateList();
  });
});
