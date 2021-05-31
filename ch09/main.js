import random from './getRandom'

//비교 연산자
const a = 1
const b = 3

console.log(a === b)
console.log(a !== b) //불일치 연산자
console.log(a <= b)
console.log(a >= b)

function isEqual(x, y){
    return x === y
}

console.log (isEqual(1, 1))
console.log (isEqual(2, '2'))


// 논리 연산자
const c = 1 ===1
const d = 'AB' === 'AB'
const e = true

console.log(c)
console.log(d)
console.log(e)

console.log('&&: ', a && b && c)
console.log('||: ', a || b || c)

//삼항 연산자
const f = 1 < 2

if (f) {
    console.log('참')
} else {
    console.log('거짓')
}

console.log(f ? '참' : '거짓')

// 조건문
console.log(random)

const g = random()

if ( g === 0){
    console.log('g is 0')
} else if( g === 1){
    console.log('g is 1')
} else if( g === 4){
    console.log('g is 4')
} else {
    console.log('rest...')
}


//조건문 switch
const h = 5

switch (h) {
    case 0:
        console.log('h is 0')
        break
    case 4:
        console.log('h is 4')
        break
    case 5:
        console.log('h is 5')
        break
    default:
        console.log('rest...')
}

// 반복문
// for (시작조건 ; 종료조건; 변화조건 ) {}
const ulEl = document.querySelector('ul')

for (let i = 0; i < 3;  i+= 1){
    const li = document.createElement('li')
    li.textContent = `list-${i+1}`
    if((i + 1) % 2 === 0){
        li.addEventListener('click', function(){
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li)
}


//변수 유효범위
//var 함수 레벨의 유효범위를 갖는다
//let, const 블럭 레벨의 유효 범위를 갖는다.  블럭 레벨은 중괄호로 보면 된다.

function scope(){
    if (true){
        console.log(k) // undefined 발생
        const k = 123
        console.log(k) // 정상 작동
    }
    console.log(k) // 에러 발생
}

// 형 변환(Type conversion)

const l = 1
const m = '1'

console.log( l == m)  //동등 연산자 - 의도하지 않게 형변환이 일어나서 true가 나옴
console.log( l === m) //일치 연산자 - false

