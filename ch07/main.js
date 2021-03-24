// HTML 요소(Element) 모두 검색/찾기
// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

// boxEls.forEach(function(boxEl, index){
//     boxEl.classList.add(`order-${index+1}`);
//     console.log(index, boxEl);
// });

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'SJ';
console.log(boxEl.textContent);
