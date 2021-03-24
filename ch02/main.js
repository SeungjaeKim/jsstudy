// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "SJ";
let email = 'ksj@mail.com';
let hello = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);

//Number(숫자 데이터)
//정수 및 부동소수점 숫자를 나타냅니다.
let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터입니다.
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

//Undefined
let undef;
let obj = {abc:123};

console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

//Null
//어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;

console.log(empty);

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. { }
let user = {
    //Key : Value,
    name: 'SJ',
    age: 38,
    isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);



