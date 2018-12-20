import { generateCombination } from 'gfycat-style-urls';

function populateList(el) {
    for (let i=0; i<15; i++) {
        let li = document.createElement('li');
        li.innerText = generateCombination(2, '', true);
        el.appendChild(li);
    }
}

const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

populateList(list1);
populateList(list2);
