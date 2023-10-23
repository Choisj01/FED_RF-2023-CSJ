// 제이쿼리 UI 드래그  & 드롭기능 활용하기 /////

// 제이쿼리 코드구역 : html태그 로딩 후 실행구역
$(() => {
    // 1.  드래그 기능 대상 : .draggable
    const dgEle = $(".draggable");

    // 2. 드래그 기능 설정하기 : draggable() 메서드 호출
    dgEle.draggable();
}); ////////////JQB(제이쿼리블록)////////////
