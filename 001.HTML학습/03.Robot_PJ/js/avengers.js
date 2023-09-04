// 어벤져스 JS - avengers.js

// 초기 데이터 셋팅
// 데이터 : avengers 데이터 - data.js -> character

// console.log(character);

// 공통 DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 어벤져스 캐릭터박스 셋팅하기
// 대상선정 : .avengers-box

const avengers = qs(".avengers-box");

console.log("대상:", avengers);

// 2. 데이터 자동 순회하여 태그만들기
// html 코드변수
let hcode = "";

// 주석순번
let num =1;


for (let x in character) {
    // 변수 x는 객체의 속성이다!
    // 객체값은 객체변수[x]
    // console.log(x,'/',character[x]);

    // num이 3이상일떄는 .txt에 .right를 추가함!

    hcode += `
    <!-- ${num}. ${x} -->
    <div class="hero">
        <!-- 이미지 -->
        <img src="./ab_img/${character[x]['이미지명']}.png" alt="${x}">
        <!-- 소개글박스 -->
        <article class="txt${num>=3?' right':''}">
            <div>
                <h3>${x}</h3>
                <p>${character[x]['설명']}</p>
            </div>
        </article>
    </div>
    `;

    // 주석번호 증가
    num++;

} ///////////////// for in 문 /////////////////////////

// 생성된 html 확인
console.log(hcode);

// 3. 대상에 html 넣어 출력하기!
avengers.innerHTML = hcode;

// 4. 로딩 후 2초 후 avengers박스에 클래스 on 넣기
setTimeout(()=>{
    avengers.classList.add('on');
},2000);

// 5. 타이틀 애니 위해 한글자씩 싸기
// 대상선정: .t1
let mytit =qs('.t1');
let my_text = mytit.innerText;
// 글자담기 변수
let tit_one = '';
// forOf문으로 한글자씩 순회하기
for(let x of my_text){
    console.log(x);
    tit_one += `<span>${x}</span>`;
} //////// for of //////////////////

console.log(tit_one);

// 다시 타이틀에 넣기
mytit.innerHTML = tit_one;

// 생성된 span요소 선택
let new_span = qsa('.t1 span')

// 셋팅된 span요소를 돌면서 하나씩 transition-delay 시간을
// 일정시간 간격으로 주기!
new_span.forEach((ele,idx)=>{
    ele.style.transitionDelay = (0.2*idx)+'s';
});

// 어벤져스 박스 나올떄까지 (5초) 기다린 후 
// span의 transform 변경하기
// + .hero 오버시 설정되도록 어벤저스 박스에
// 클래스 .active 넣기!
setTimeout(()=>{
    // for(let x of new_span) x.style.transform='translateY(0) scale(1)';
    mytit.classList.add('on');
    avengers.classList.add('active');
},5000);



 /************************************************* 
       [ 객체를 위한 for in 문 ]

       - 구문: 
       for(변수 in 객체){코드}

       - 작동원리:
       객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

       - 변수는 객체의 속성명이다!

       - 객체의 값을 사용하려면 for in 문 안에
           객체[변수] 로 쓰면됨!

 *************************************************/
