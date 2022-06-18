//Truthy : 참이 아니지만 참같은 값.
//Falsy : 거짓이 아니지만 거짓같은 값.

const getName = (person) => {
    if (!person) { //null undefined은 false되서 NOT =>True가 된다.
        return "객체가 아닙니다.";
    }
    return person.name;
}
let person = null;
const name = getName(person);
console.log(name);




// const getName = (person) => {
//     if (person === undefined || person === null) { //예외처리는 undefined만 되었기 때문에 null까지 예외처리 해줘야 처리적으로 출력이 가능하다.
//         return "객체가 아닙니다.";
//     }
//     return person.name;
// };

// let person = null;
// const name = getName(person);
// console.log(name); 

// let person = { name: "이동훈" };
// const name = getName(person);
// console.log(name);


// let a = undefined;

// if (a) {
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// }