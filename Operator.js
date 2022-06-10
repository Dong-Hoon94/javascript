let a = 1; //대입 연산자

let b = 2;

let c = "1";
//문자+문자로 더하면 12 이렇게 붙혀서 출력된다. -> 연결 연산자
let d = "2";

console.log(a + b);
console.log(a * b);
console.log(a - b); //산술 연산자 (+,*,-,/ %(나머지))
console.log(a / b);
console.log(a % b);


let e = 5;

e = e + 10;
//복합 연산자
e /= 10;
console.log(e);

//증감 연산자 : 증가시키거나 감소하는일
let ad = 10;
ad++;
console.log(ad++); //증감 연산자는 뒤에 사용하면 라인이 끝나고 나중에 연산된다(값이 ↑). -> 후위연산자
//반대로 앞에 붙으면 바로 증감된다 -> 전위연산자             
console.log(ad);

//논리 연산자 boolean으로 이용한 연산자
console.log(!true); //NOT 반대로 출력 ex: true -> false  false -> true

console.log(true && true) //true AND true (연산자 피연산자 2개일경우 참)
    //    피연산자  연산자

// || 연산자-> 둘중 1개라도 참이면 참

//비교 연산자
let commpareA = 1 == "1"; //1과 문자1를 같나요? 결과 : true 
//값뿐만 아니라 자료형까지 똑같이 비교할때는 === 3개 입력하면 된다.
let commpareB = 1 != "1"; //같지 않는다는 부호는 앞에 ! 삽입하면됨 (false)
//안전하게 비교할려면 ===   같지 않을때도 !==

let commparec = "2"; //타입에서 숫자를 넣어놨다가 문자로 넣어도 상관없음
//                     -> 동적 타입언어 유연성이 있지만 에러나는 확률이 높음
//                        (나중에 타입스트립트로 배워야하는 이유)
console.log(typeof commparec); //string
let commpared = 2;
console.log(typeof commpared) //number