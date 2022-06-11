// function isKoreanFood(food) {
//     if (["불고기", "떡볶이", "비빔밥"].includes(food)) { //메서드를 활용해서 복잡한 조건문을 간략하게 줄일수있다
//         return true;
//     }
//     return false;
// }
// const food1 = isKoreanFood("불고기");
// const food2 = isKoreanFood("파스타");
// console.log(food1)
// console.log(food2)

// const getMeal = (mealType) => {
//     if (mealType === "한식") return "불고기";
//     if (mealType === "양식") return "파스타";
//     if (mealType === "중식") return "멘보샤";
//     if (mealType === "일식") return "초밥";
//     return "굶기";
// }
// console.log(getMeal("한식"));
// console.log(getMeal("중식"));
// console.log(getMeal("일식"));

//객체 프로퍼티 "[]" 표기법을 활용해서 간략하게 사용할수있다.
const meal = {
    한식: "불고기",
    일식: "초밥",
    중식: "멘보샤",
    양식: "스테이크",
    인도식: "카레",
}
const getMeal = (mealType) => {
    return meal[mealType] || "굶기";
};
console.log(getMeal("한식"));
console.log(getMeal());