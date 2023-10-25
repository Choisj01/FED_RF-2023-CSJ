// 보그PJ 카테고리 JS - category.js

// 부드러운스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";

//부드러운 스크롤 적용//////////////
startSS();

/////////////////////////////////////////////////
// 카테고리 페이지 기능구현하기////////////////////
// 요구사항 : url로 전달된 키값을 읽어서
//페이지에 데이터를 셋팅한다!
////////////////////////////////////////////////

// 1.전체 url 읽기
let pm = location.href;
console.log(pm);

// 값 처리함수 호출하기
setValue();


// 값 셋팅하기 함수 //////////////
function setValue() {
    // 2. url에서 키값 분리하기
    // ?(물음표)가 Get방식의 시그널이므로
    // 이것의 존재여부로 문자 자르기를 실행한다!
    // =(이퀄) 기호도 같이 확인함
    try {
        if (pm.indexOf("?") == -1||
        pm.indexOf('=')==-1) {
            throw "잘못된 접근입니다!";
        } ////////if///////
        
    }  //////////try///////////
    catch (err) {//err - 메시지 받기
        // 에러메시지 띄우기
        alert(err);
        // 메인페이지로 보내기
        location.href = 'index.html';
    } ///////catch//////////

    // 3. url 키값 추출하기
    pm = pm.split('?')[1].split('=')[1];
    // 특수문자 변환하기 : time&gem
    pm = decodeURIComponent(pm);
    console.log('최종키값:',pm);    

} //////////////////setValue////////
