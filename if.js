//조건문 : 어떤 연산 결과에 따라서 true false 따라서 다른 명령을 각각 실행하도록 도와주는 문법.

let a = 3;

let b = 3;


if (a >= 5) {
    console.log("5 이상입니다."); //일치
} else {
    console.log("5 이하입니다."); //불일치
}

if (b >= 7) {
    console.log("5 이상입니다.")
} else if (a >= 5) {
    console.log("5 미만입니다.");
} else if (a >= 4) {
    console.log("4이상입니다.")
} else {
    console.log("5미만입니다.")
}

let country = "ko";

if (country === "ko") {
    console.log("한국");
} else if (country === 'cn') {
    console.log("중국");
} else if (country === "jp") {
    console.log("일본")
} else {
    console.log("미 분류");
}

//Switch : 하나의 조건식으로 많은 분기로 나누어 처리 할 수있는 제어문 
//break : 해당 조건식을 빠져나오게 해주는 제어문   

let country1 = "ko";
switch (country1) {
    case 'ko':
        console.log("한국");
        break;
    case 'cn':
        console.log("중국");
        break;
    case 'jp':
        console.log("일본");
        break;
    case 'uk':
        console.log("영국");
        break; // 적절한 타이밍에 끊어줘야 1개씩 출력하게 된다.

    default:
        console.log("미 분류"); // -> else 역할과 같음
        break;
}

let car = "현대";

if (car === '현대') {
    console.log("한국차입니다.");
} else if (car === "벤츠") {
    console.log("독일차입니다.");
} else if (car === "벤틀리") {
    console.log("영국차입니다.");
} else if (car === "닛산") {
    console.log("일본차입니다.");
} else {
    console.log("잘못 입력하셨습니다 다시 한번 입력해주세요.")
}

let car2 = "현대";
switch (car2) {
    case "벤츠":
        console.log("독일차입니다.");
        break;
    case "현대":
        console.log("한국차입니다.");
        break;
    case "벤틀리":
        console.log("영국차입니다.");
        break;
    case "람브로기니":
        console.log("이탈리아차입니다.");
        break;
    default:
        console.log("다시 입력하세요!")
        break;

}