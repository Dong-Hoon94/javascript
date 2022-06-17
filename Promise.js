// Promise : 콜백 지옥에서 우리를구원해준다.
// 콜백 지옥 : 연속되는 비동기 함수를 처리할때 비동기 결과값을 사용하기 위해서 콜백이 깊어지는 현상

// function isPostitive(number, resolve, reject) {
//     setTimeout(() => {
//         if (typeof number === "number") {
//             // 성공 -> resolve
//             resolve(number >= 0 ? "양수" : "음수")
//         } else {
//             // 실패 -> reject
//             reject("주어진 값이 숫자형 값이 아닙니다.")
//         }
//     }, 2000)
// }

// function isPostitiveP(number) {
//     const executor = (resolve, reject) => { //executor: 실행자 (비동기 작업을 실질적으로 수행하는 함수)
//         setTimeout(() => {
//             if (typeof number === "number") {
//                 // 성공 -> resolve
//                 console.log(number);
//                 resolve(number >= 0 ? "양수" : "음수")
//             } else {
//                 // 실패 -> reject
//                 reject("주어진 값이 숫자형 값이 아닙니다.")
//             }
//         }, 2000)
//     };
//     const asyncTask = new Promise(executor); //전달하는 순간 executor함수가 바로 실행한다.
//     return asyncTask;
// }

// const res = isPostitiveP(2);

// res.then((res) => {
//         console.log("작업 성공 :", res);
//     })
//     .catch((err) => {
//         console.log("작업 실패 :", err);
//     });

// isPostitive(
//     2,
//     (res) => {
//         console.log("성공적으로 수행됨 :", res);
//     }, (err) => {
//         console.log("실패 하였음:", err);
//     });



function taskA(a, b, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);

    })
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    })
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000)
    })
}

const bProiserResult = taskA(5, 1)
    .then((a_res) => {
        console.log("A RESULT:", a_res); //Promise 함수를 쓰면 내려서 쓸수가 있기때문에
        //                       콜백지옥을 피하면서 가독성있고 깔끔한 비동기처럼 할수 있도록 
        //                       도와줌.
        return taskB(a_res);
    }).then((b_res) => {
        console.log("B RESULT:", b_res);
        return taskC(b_res);
    }).then((c_res) => {
        console.log("C RESULT:", c_res);
    });

// taskA(3, 4, (a_res) => {
//     console.log("task A", a_res);
//     taskB(a_res, (b_res) => {
//         console.log("task B:", b_res);
//         taskC(b_res, (c_res) => {
//             console.log("task C:", c_res);
//         })
//     })
// });