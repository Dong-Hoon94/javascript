//async //promise를 더욱 간편하게 사용하는것.

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}


async function helloAsync() {
    return delay(3000).then(() => {
        return "hello Async";
    });
}

function main() {
    const res = await helloAsync();
    console.log(res);

}

main();


console.log(hello());
console.log(helloAsync());
//비동기 promise 함수가 됨

helloAsync().then((res) => {
    console.log(res);
});