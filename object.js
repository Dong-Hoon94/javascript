// let person = {
//     key: "value", //프로퍼티 (객체 프로퍼티)
//     key1: 123, //중복되도 문제를 되지않으나 나중에 
//     //            키1 벨류를 찾을때 무시하고 실행함으로 권장한 방법은 아니다 
//     key2: true,
//     key3: undefined,
//     key4: [1, 2],
//     key5: function() {}


// }; //객체 리터럴 방식
// console.log(person);
//let person = new Object(); //new :뒤에있는 객체를 생성한다라는 의미


// let peroson = {
//     name: "이동훈",
//     age: 25
// };

// console.log(getPropertyValue("name"));

// function getPropertyValue(key) {
//     return person[key];
// }

let person = {
    name: "이동훈", //멤버
    age: 29, //멤버
    say: function() {
        // console.log("안녕");
        console.log(`안녕 나는 ${this["name"]}`);
        //매서드 -> 객체안에 함수 역할 하는것(객체매서드) 
    },

};

person["say"](); //객체 함수 호출
// console.log(person.gender); //연산같은 오류가 발생할수있으니 추가 할거아니면 접근하지 않아야 함.
console.log(`name :${"name" in person}`) //person 객체에 name 키를 갖는 프로토타입이 있냐?를 물어보는 in 연산자 
    //                                        name값이 있기때문에 true
console.log(`age : ${"age" in person}`)
console.log(`gender: ${"gender" in person}`) //person 객체에 gender키가 없으므로 false 

let car = {
    name: "소나타",
    mileage: "9.9~13.8km",
    price: 2547
};
console.log(`내 자동차는 ${this.name}`);


person.location = "한국"; //점표기법으로 객체요소에 접근
// person["gender"] = "남성"; //대괄호 표기법으로도 가능함 (대괄호안에 문자열 표기)

person.name = "이동훈 B"
person["age"] = 39;

person = { //상수로 선언한 대체 person 자체에 대입연산을 하지않으면 에러 발생 X
    age: 20
};
// delete person["age"]; // 객체 삭제
person.name = null; // 삭제한것과 동일함 (객체 메모리에서 삭제)