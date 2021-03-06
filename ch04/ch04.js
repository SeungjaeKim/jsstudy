//함수 (function)
// 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

//함수 선언
function hellFunc(){
    //실행코드
    console.log(1234);
}

//함수 호출
hellFunc(); //1234

function returnFunc(){
    return 123;
}

let a = returnFunc();

console.log(a);  //123

//함수 선언
function sum(a, b){ // a와 b는 매개변수(Parameters)
    return a + b;
}

//재사용
let b = sum(1, 2);  //1과 2는 인수(Arguments)
let c = sum(7, 21);
let d = sum(6, 13);

console.log(b, c, d);

// 기명(이름이 있는) 함수
// 함수 선언!
function hello(){
    console.log('Hello~');
}

//익명(이름이 없는) 함수
//함수 표현!
let world = function(){
    console.log('World~');
}

// 함수 호출
hello();
world();

//객체 데이터
const heropy = {
    name: 'SJ',
    age: 85,
    //메소드(Method)
    getName: function(){
        return this.name;
    }
}

const hisName = heropy.getName();
console.log(hisName);  //SJ
// 혹은
console.log(heropy.getName());  //SJ

