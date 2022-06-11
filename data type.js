let age = 25; //정수

let tall = 175.9; //실수

let inf = Infinity;

let miusInf = -Infinity;

let nan = NaN; //연산이 잘못 수행이 되었을 경우 수학적 연산 실패

let name = "Winterlood";

let name2 = "이동훈";

let name3 = `Winterlood ${name2}`; //문자열안에 변수값을 넣어주는 백틱이며 이것을 템플릿 리터릴라고 함.

console.log(name3);

console.log(age + tall);


let isSwitchOff = false; //boolean


let numberA = 12;

let numberB = "2";

console.log(numberA + parseInt(numberB)); //자바스크립트가 문자열 2을 자동으로 숫자2로 계산한 결과이다
//이것을 형변환, 캐스팅이라고 부름 묵시적 형변환 parseInt:문자열을 받아서 숫자로 바꿈

//12 = 숫자 "2" = 문자열

console.log("입력중")
let ad = 100;
() => console.log('화살표함수');

if (ad >= 10) {
    setTimeout(() => console.log('입력완료'), 10000);
} else {
    console.log("오류");
}