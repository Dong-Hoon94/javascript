// for (let i = 1; i <= 100; i++) {
//     // 초기식   조건식   연산(반복할때마다 수행할 연산을 하면됨)    
//     //반복 수행할 명령
//     console.log("이동훈");
//     //반복문: 초기화 조건 연산 명시된대로 반복 수행 부분인 중괄호 속에 코드를 계속 반복해서 실행하는일
// }

// const arr = ["A", "B", "C"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     //배열의 요소를 순회할수있다.
// }

let person = {
    name: "이동훈",
    age: 29,
    tall: 165
};

const personValues = Object.values(person); //keys: 배열을 반환해서 돌려준다
for (let i = 0; i < personValues.length; i++) {
    console.log(personValues[i]);
}

// const curKey = personKeys[i];
// const curValue = person[curKey]

// console.log(`${curKey} : ${curValue}`)