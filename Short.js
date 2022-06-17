const getName = (person) => {
    const name = person && person.name; //이동훈
    return name || "객체가 아닙니다."; //객체가 아닙니다.
};

let person = { name: "이동훈" };
const name = getName(person);
console.log(name);