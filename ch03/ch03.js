//변수
//데이터를 저장하고 참조(사용)하는 데이터의 이름
//var , let, const
//최신 js에서는 var를 사용하지 않는것이 좋다.

//재사용이 가능
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//값(데이터)의 재할당 가능!
let c = 12;
console.log(c);

c = 999;
console.log(c);

//값(데이터)의 재할당 불가!
const d = 12;
console.log(d);
d = 999;
console.log(d); // TypeError: Assignment to constant variable.

//예약어(Reserved Word)
//특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
// let this = 'Hello'; //SyntaxError
// let if = 123; //SyntaxError
// let break true; //SyntaxError
