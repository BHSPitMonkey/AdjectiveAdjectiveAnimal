import { generateCombination } from 'gfycat-style-urls';

function populateList() {
    const list = document.getElementById('list');

    for (let i=0; i<36; i++) {
        let li = document.createElement('li');
        li.innerText = generateCombination(2, '', true);
        list.appendChild(li);
    }
}

populateList();
