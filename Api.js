//API (Application Programming lnterface)
//응용 프로그램 프로그래밍 인터페이스
//응용 프로그램에서 사용할 수 있도록,
//운영 체제나 프로그래밍 언어가 제공하는 기능을
//제어할 수 있게 만든 인터페이스를 뜻한다.
//주로 파일 제어, 창 제어 , 화상처리, 문자 제어등을
//위한 인터페이스를 제공한다.

// 주소:https://jsonplaceholder.typicode.com/posts
//  객체 배열처럼 생긴 녀석들이 나온다.
//  API 호출할때 누군가한테 말걸건지를 결정하는 주소이다.
// 웹브라우저으로 주소로 접속했을때 이렇게 노출되는건 JSON 형식이다.
// 응답 결과를 보여주는 리스펀스라고한다.

async function getData() {
    let rawResponce = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponce.json();
    console.log(jsonResponse);
}
getData();