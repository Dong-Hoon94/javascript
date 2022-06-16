//자바스크립트의 싱글 스레드 작업 수행 방식
//                                                  블로킹 방식
// Thread -> taskA(0.3초) -> taskB(0.5초) ->taskC(0.2초)  
//자바스크립트는 코드가 작성된 순서대로 작업을 처리함.SDFDSF
//이전 작업이 진행 중 일 때는 다음 작업을 수행하지 않고 기다림
//먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.
//-> 동기 방식의 처리

////자바스크립트의 싱글 스레드 작업 수행 방식 (무거운 작업할때)

// Thread -> taskA(0.3초) -> taskB(20초) ->taskC(10초) 
//동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 시,
//모든 작업이 오래 걸리는 하나의 작업이 종료되기 전 까지 올 스탑 되기 때문에, 전반적인 흐름이 느려진다.

//웹사이트에서 버튼 하나하나마다 30초 씩 걸리면, 속터진다.
// -> 동기처리 방식의 문제점

//멀티 쓰레드 
//Thread -> taskA (0.3초)

//ThreadA ->ThreadB(20초)

//ThreadB -> taskC (10초)

//코드를 실행하는 일꾼 Thread를 여러개 사용하는 방식인 "MultiThread" 방식으로 작동시키면 이런 식으로
//작업 분할 가능 오래 걸리는 일이 있어도 다른 일꾼 Thread에게 지시하면 되모르 괜찮음
//자바스크립트는 아쉽게도 싱글 쓰레드 1개만 사용할수 있다.

//비동기
// Thread -> task A   taskC 10초 논 블로킹 방식 taskB 20초
//싱글 쓰레드 방식을 이용하면서, 동기적 작업의 단점을 극복하기 위해
//여러 개의 작업을 동시에 실행시킴.
// 즉, 먼저 작성된 코드에 결과를 기다리지 않고 다음 코드를 바로 실행함

function taskA(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 3000);
}

function taskB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

//비동기
taskA(4, 5, (a_res) => {
    console.log("A RESULT:", a_res);
    taskB(a_res, (b_res) => {
        console.log("B RESULT:", b_res);
        taskC(b_res, (c_res) => {
            console.log("C RESULT:", c_res);
        })
    })
})


// taskA(3, 4, (res) => { //기달리지않고 바로 실행해버리는걸 비동기라고 한다.
//     console.log("A TASK RESULT :", res)
// });

// taskB(7, (res) => {
//     console.log("B TASK RESULT:", res);
// });


// taskC(14, (res) => {
//     console.log("A TASK RESULT:", res);
// })

// console.log("코드 끝");

function one() {
    return 1;
}

function two() {
    return one() + 1;
}

function three() {
    return two() + 1;
}
console.log(three());

function asyncAdd(a, b, cb) {
    setTimeout(() => { //비동기함수이기 때문에 자바엔진에서는 WebAPIS 넘겨버린다.
        // 그러면 실행이 멈추는게 아니라 그 자리에서 3초를 기달리게 되고,
        // 머무르지 않게 때문에 바로 다음 실행할 수 있게 되고 asyncAdd함수를 끝낼수 있게 된다.
        //그리고 asyncAdd함수는 실행을 다 마쳤기 때문에 callStack에서 제거가 된다. 
        const res = a + b;
        cb(res);
    }, 3000); //web APIS에서 callback queue로 옮겨짐. 
}

asyncAdd(1, 3, (res) => {
        console.log("결과 :", res);
    })
    //결과
    //Main context -> asyncAdd() -> setTimeout()