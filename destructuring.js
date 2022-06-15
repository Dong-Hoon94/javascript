// 비 구조화 할당 : 원하는 값을 더 쉽고 빠르게 쏙쏙 뽑아내는방법 이라는 것을 비 구조화 할당 또는 같은말로 구조분해 할당을 말한다.

// let [one, two, three, four = "four"] = ["one", "two", "three"];
// // let one = arr[0];
// // let two = arr[1];
// // let three = arr[2];

// console.log(one, two, three, four);

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

let object = { one: "one", two: "two", three: "three", name: "이동훈" };
// let one = object.one;
// let two = object.two;
// let three = object.one;

// console.log(one, two, three);
let { name: myName, one: oneOne, two, three } = object;
console.log(oneOne, two, three, myName);

let number = {
    no: 1,
    no2: 192,
    no3: 204,
}


setTimeout(() => console.log("30초후 시작되었습니다."), 3000 * 10);