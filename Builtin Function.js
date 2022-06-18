const arr = ["이동훈", "님", "안녕하세요?", "또 오셨군요."];

console.log(arr.join(" ")); //조인함수는 배열의 존재하는 요소들을 문자 하나로 합치는 함수
//                            전달하는 무엇가는 구분자가 된다 (뭘 넣어도 상관x)



// let numbers = [0, 1, 3, 2, 10, 30, 20]; //오름차순 내림차순 정렬

// const compare = (a, b) => {
//     // 1. 같다
//     // 2. 크다
//     // 3. 작다

//     if (a > b) {
//         // 크다 (뒤로)
//         return -1;
//     }
//     if (a < b) {
//         //작다 (앞으로)
//         return 1;

//         //같다 (안바꿈)
//     }
//     return 0;
// };
// numbers.sort(compare);
// console.log(numbers);
// // console.log(numbers);

// chars.sort(); //정렬하는 함수
// console.log(chars)





// const arr = [
//     { num: 1, color: "red" },
//     { num: 2, color: "black" },
//     { num: 3, color: "blue" },

// ];
// const arr2 = [
//     { num: 4, color: "green" }, //일치하는 요소가 두개있으면 가장먼저 요소가 출력됨
//     { num: 5, color: "green" }

// ];
// console.log(arr1.concat(arr2)) //concat: 붙이는 함수 첫번째 arr1 뒤로  두번째 arr2를 붙이면서 하나의 배열을 다시 리턴해줌
//     // console.log(arr.slice()); //자르지도않고 아무런 일도없이 그대로 반환.
//     // console.log(arr.slice(0, 2));




// let number = 3;

// console.log(arr.findIndex((elm) =>  elm.color === "red")); //단축표현

// const element = arr.find((elm) => { //만족하는 요소 자체를 반환
//     return elm.color === "red" //인자값을 찾아줌 블루 -> 결과값:2
// });

// console.log(element);


// const arr = [1, 2, 3, 4];

// let number = 3;
// console.log(arr.indexOf(number)); //-1 주어진 배열에서 전달받은 인자와 일치한 값에 인덱스를 반환하는 함수
// //만약에 주어진 배열과 배열 안에있는 값이 하나도 없을때 -1이 출력되는데 배열값에 존재하지않는다는 의미이다. 배열안에있으면 몇번째 위치를 알려준다.

// arr.forEach((elm) => {
//     if (elm === number) {
//         console.log(true);
//     }
// });

// const newArr = arr.map((elm) => { //map -> forEach보다 압축한 함수이다.
//     return elm * 2;
// });
// console.log(newArr);

// arr.forEach((elm) => console.log(elm * 2)); //콜백함수

// arr.forEach(function(elm) {
//     newArr.push(elm * 2);
// });
// console.log(newArr);