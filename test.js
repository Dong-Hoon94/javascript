// 비동기: 코드의 순서대로 실행되는 게 아닌 걸 말해 
// 어떤 특정 조건이나 상황에 따라서 코드가 달라져 

// console.log('로딩중') //요청중   
// setTimeout(function() { // timer()
//         console.log('연결됨') //정상 실행  
//     }, 1000) //서버측의 요청함
// console.log('로딩끝'); //서버를 응답 끝  

// 콜백 함수
function add(n1, n2, cb) {
    if (!n1 && !n2) { return; }
    return cb(n1, n2);
}

const result = add(1, 2, function(a, b) {
    console.log(a, b)
    return a + b;
})

console.log(result)

// const promise = new Promise((resolve, reject) => {
//     console.log('이전작업')
//     resolve('성공')
//         // reject('실패')
//     console.log('다음꺼')
// })

// promise
//     .then(result => console.error(result))
//     .catch(err => console.error(err))

function getName(name) {
    return getName = new Promise((resolve, reject) => {
        if (name && name !== '') {
            resolve({ result: true })
        } else {
            reject({ result: false })
        }
    })
}

getName('')
    .then(result => console.log(result))
    .catch(err => console.error(err))