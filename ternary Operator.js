//삼항 연산자:아래 코드처럼 작성해서 조건문을 파격적으로 줄여줄수있는 테크닉이다.
// 가장 처음으로 조건문을 적어주고 물음표 키워드를 적어준 다음 참일때 수행하는 식을 적고
// 거짓일때 수행하는 식을 : 찍은 다음에 ;찍어서 문장에 끝을 알려준다.
// 물음표 키워드 : 앞에 조건식이라는걸 명시하기위해 쓰는것.                                 
// let a = -3;
// a >= 0 ? console.log("양수") : console.log("음수");
// //         참일때                   거짓일떄

// let a = [];  배열이 비워있는지 안비워있는지 조건문으로 출력

// if (a.length === 0) {
//     console.log("빈 배열");
// } else {
//     console.log("안 빈 배열")
// }

// let a = [];
// const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열"; //이렇게 하면 노란색 경고줄이 되면서 어디에다 저장을 하라는뜻이다.

// let a = [];  //truthy & falsy

// const result = a ? true : false;
// console.log(result);

//ToDO : 학점 계산 프로그램
//90점 이상 A+
//50점 이상 B+
//둘다 아니면 F

let score = 40;

// score >= 90 ?
//     console.log("A+") :
//     score >= 50 ?
//     console.log("B+") :
//     console.log("F")

//코덱 가독성이 해치는경우가 있기때문에 중첩 if문을 사용
if (score >= 90) {
    console.log("A");
} else if (score >= 50) {
    console.log("B+");
} else {
    console.log("B+");

}