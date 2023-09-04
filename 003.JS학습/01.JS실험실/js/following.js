// 따라다니는 원 JS - following.js

// 1.이벤트 등록하기 (js 순서 1번)
window.addEventListener("DOMContentLoaded", loadFn);

// 2. 함수만들기 (js 순서 2번)
// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 2-1. 로드함수 ///// (js 순서 3번)
function loadFn() {
    // 함수호출확인
    // console.log("로딩완료!");

    // 1. 대상선정
    // 변경대상: .cont-box
    const cont_box = qs(".cont-box");
    // console.log("대상:", cont_box);

    // 2. html 태그만들기
    // 50개 이미지 만들기
    let hcode = ""; /* 데이터 저장 공간 hcode(본인이 명명하면 됨) 메모리공간명 만듦 */
    // 빈 리터럴 

    // for(시;한;증){코드}
    for (let i = 1; i <= 50; i++) {
        hcode += `
        <div>
            <img src="../images/dress/${i}.jpg" alt="dress">
            <a href="#" class="link">이것은 너의 드레스야!</a>
        </div>  
        `;
    } ///////////// for //////////////////////

    // console.log('코드:',hcode);

    // 3. 대상에 html 넣기
    cont_box.innerHTML = hcode;


} /////////////////로드함수 ///////////////////////
