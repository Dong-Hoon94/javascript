// let width1 = 10;

// let height1 = 20;

// let area1 = width1 * height1;
// console.log(area1);

// let width2 = 30;
// let height2 = 15;


// let area2 = width2 * height2;
// console.log(area2);

// function : 기능
let count = 1; //내부 외부에 선언되어서 어디에서나 접근할수있는것을 전역변수,글로벌변수라고한다.

function getArea(width, height) { //()매개 변수라고 한다  //내부가 어떤 역할을 할것인지 대해서 명시 하여야함
    let area = width * height;
    console.log(count);
    return area; //getAre 함수가 리턴을 하므로써 값을 반환된다.
    // 함수 선언식, 함수 선언 방식의 함수 생성
}
//getArea(); 함수 호출
let area1 = getArea(100, 200); //함수 내부에 선언한 변수나 상수는 함수 바깥에서는 접근이 안됨
//                              따라서, 이 함수 내에서 선언한 변수는 이 지역에 벗어날수 없는것을 지역변수라고 함
console.log(area1)
    // console.log("area1 :", area1);
console.log("함수 실행 완료");