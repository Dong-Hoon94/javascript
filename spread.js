// const cookie = {
//     base: "cookie",
//     madeIn: "korea"
// };

// const chochchipCookie = {
//     base: "cookie",
//     madeIn: "korea",
//     toping: "chocochip"
// };
// const blueberryCookie = {
//     ...cookie, //... 스프이드 연산자라고 하며 펼치는 연산자이다
//     //객체에 새로 펼쳐주는 연산자이다
//     toping: "chocochip"
// };

// const strawberryCookie = {
//     ...cookie,
//     toping: "strawberry"
// };
// console.log(chochchipCookie);
// console.log(blueberryCookie);
// console.log(strawberryCookie);

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies]
console.log(allCookies)