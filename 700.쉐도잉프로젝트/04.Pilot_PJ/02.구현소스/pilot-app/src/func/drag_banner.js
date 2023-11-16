// 메인페이지 드래그 (스와이프) 배너 기능함수

// 제이쿼리 호출
import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function dragBanner() {

    // 드래그 기능넣기
    // 대상: .slide
    const slide = $(".slide");
    // 커버
    const cover = $(".cover");
    // 블릿
    const indic = $('.bindic li');
    // console.log(cover);

    // 드래그 기능넣기
    slide.draggable({ axis: "x" });

    // 드래그가 끝났을때 슬라이드 위치
    slide.on("dragstop", () => {
        // 광드래그 막기 커버
        cover.show();

        // 비교를 위한 윈도우 가로값
        let winW = $(window).width();
        // 현재 슬라이드 left값
        let pos = slide.offset().left;
        // 이동차이수 = 슬라이드위치값(양수) - 윈도우가로값
        let diff = Math.abs(pos) - winW;
        // 결과해석: 양수->왼쪽으로 이동/음수->오른쪽으로 이동

        // 기준값 : 화면크기를 기준한 부분
        let gap = winW / 10;
        console.log("드래그 멈춤!", pos, winW, diff);

        // 왼쪽으로 이동하기
        if (diff > gap) {
            slide.animate({ left: "-200%" }, 800, "easeOutQuint", () => {
                // 맨앞li 맨뒤로 이동
                slide
                    .append(slide.find("li").first())
                    // left값 -100%(처음값)
                    .css({ left: "-100%" });
                // 커버제거
                cover.hide();
            });
        }
        // 오른쪽으로 이동하기
        else if (diff < -gap) {
            slide.animate({ left: "0" }, 800, "easeOutQuint", () => {
                // 맨뒤li 맨앞으로 이동
                slide
                    .prepend(slide.find("li").last())
                    // left값 -100%(처음값)
                    .css({ left: "-100%" });
                // 커버제거
                cover.hide();
            });
        }
        // 제자리로 ////
        else {
            slide.animate({ left: "-100%" }, 300, "easeOutQuint", () => {
                // 커버제거
                cover.hide();
            });
        }

        // 블릿 변경하기
        // 현재 슬라이드 순번 알아오기
        // -> 클래스명 'ban번호'로 되어있음
        // 마지막 번호만 잘라서 1을 뺴면 순번임!
        

    }); /////////// dragstop /////////

} ////////dragBanner 함수 ///////////
