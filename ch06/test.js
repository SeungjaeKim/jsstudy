//HTML 요소(Element) 검색/ 찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);  //true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);  //false