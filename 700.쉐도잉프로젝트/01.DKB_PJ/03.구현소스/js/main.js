// 도깨비 PJ 메인 JS ㅡ main.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

// 로딩구역 호출설정
window.addEventListener("DOMContentLoaded", loadFn);

// 로딩구역 함수///////////////////
function loadFn() {
    // 호출확인
    console.log("로딩완료");

    // 부드러운 스크롤 적용///////////////////
    startSS();

    // 부드러운 스크롤떄문에 마우스휠 이벤트 막기가 작동되어
    // 캐릭터 설명박스 작은 스크롤도 작동안됨!
    // 따라서 이벤트 버블링을 막아줘야함!
    // event.stopPropagation()
    // 이벤트 객체의 이벤트 버블링 막아주는 메서드임!

    // 대상선정: .desc-box
    let desc_box = document.querySelectorAll(".desc-box");
    console.log(desc_box);

    // 모든 캐릭터 설명박스는 이벤트 버블링막기!!!
    // -> 여기서 마우스휠 됨!!!
    desc_box.forEach((ele) => {
        // ele -요소 자신
        ele.onwheel = (e) => e.stopPropagation();
    });

    /************************************************
     *  [ 현장 포통 데이터 구성하기]
     *  - 배열데이터를 이용하여 HTML코드 구성
     ***********************************************/
    // 1. 대상선정: .live-box
    const liveBox = domFn.qs(".live-box");
    console.log("대상:", liveBox);

    // 2. 현장포토 데이터를 기반으로 HTML코드 만들기
    let hcode = "<ul>";

    // 반복코드만들기////
    // 현장코드 데이터 - data_drama.js에서 가져옴
    liveData.forEach((val) => {
        // html변수에 계속 넣기
        hcode += `<li>
        <figure>
            <img src="./images/live_photo/${val.imgName}.jpg" alt="${val.title}">
            <figcaption>${val.title}</figcaption>
        </figure>
    </li>`;
    }); ////////////forEach/////////////////

    hcode += "</ul>";

    // console.log(hcode);

    // 3. 대상박스에 html코드 넣기
    liveBox.innerHTML = hcode;
} /////////// loadFn 함수/////////////
////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// [GNB 서브메뉴 셋팅하기]
// 구조 : div.smenu > aside.smbx > h2{1차메뉴}+ (ol>li>a{2차메뉴})

// 1. 대상선정 : .gnb > ul > li
// 서브메뉴 넣을 li는 하위 a요소의 텍스트가 gnbData 속성명 1차메뉴와
// 일치하는 경우 하위메뉴를 넣어준다!
const gnbList = domFn.qsa(".gnb>ul>li");
console.log("메뉴:", gnbList, "/데이터:", gnbData);

// 3. 대상에 하위메뉴 태그 만들기
gnbList.forEach((ele) => {
    // 1. 하위 a요소 텍스트읽기
    let atxt = domFn.qsEl(ele, "a").innerText;
    // 2. gnb 데이터읽기
    let gData = gnbData[atxt];
    // console.log("텍스트:",atxt,gData);
    // 3. 해당 서브 데이터가 있을 경우 태그 만들어넣기
    // Array.isArray(gData) 로 배열 여부를 확인한다!
    // 배열값은 태그를 만들어 그자리에 출력 : 배열.map().join('')
    if (gData) {
        // 데이터 없으면 undefined ->false처리!
        console.log("만들어!", atxt);
        ele.innerHTML += `
        <div class="smenu">
            <aside class="smbx">
                <h2>${atxt}</h2>
                <ol>
                ${gData.map((val) => 
                    `
                  <li>
                     <a href="#">${val}</a>
                  </li>
                `
                ).join('')}
                 
                </ol>    
            </aside>
        </div>
        `;
    } //////////////if///////////////
}); ////////////forEach/////////////////

/**************************************************************************
  [ 상위메뉴 li오버시 하위메뉴 보이기 ] 
  이벤트대상: .gnb>ul>li
  변경대상: .smenu

**************************************************************************/
// 1. 대상선정 
const gnb =domFn.qsa('.gnb>ul>li');

// 2. 이벤트 설정하기
// 이벤트 종류 : mouseover / mouseout
gnb.forEach(ele=>{
    // 서브메뉴가 있을떄만 이벤트 설정하기!
    // if문에서 undifined/null 은 false 처리됨!
    if(domFn.qsEl(ele,'.smenu')){
        domFn.addEvt(ele,'mouseover',overFn);
        domFn.addEvt(ele,'mouseout',outFn);
    }
});

// 3. 함수만들기
function overFn(){
    console.log('오버',this);
    // 1.하위 .smenu 높이값 알아오기
    let hv = domFn.qsEl(this,'.smbx').clientHeight;
    console.log('높이:',hv);
    // 2.하위 서브메뉴박스 만큼 .smenu 높이값 주기
    domFn.qsEl(this,'.smenu').style.height = hv + 'px';

}/////////////////////////////overFn함수//////////////////////////

function outFn(){   
    // console.log('아웃',this);
    // 서브메뉴 박스 높이값 0 만들기
    domFn.qsEl(this,'.smenu').style.height = '0px';

}/////////////////////////////outFn함수//////////////////////////
