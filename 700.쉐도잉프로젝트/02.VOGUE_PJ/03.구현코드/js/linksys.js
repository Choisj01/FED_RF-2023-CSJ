// 보그PJ 링크 시스템JS -linksys.js

// 제이쿼리 로드 구역///////////////(지역화)
$(()=>{
    // 요구사항 : 각 네비게이션 클릭시 페이지 이동
    // 1. 대상선정 
    // 1-1. 로고 링크 : .logo a
    const logo = $('.logo a')
    // 1-1. GNB메뉴 : .gnb a
    const gnb = $('.gnb a');
    console.log('대상',logo,gnb);

    // 2. 이벤트설정 및 이동기능 구현하기
    // 2-1. 로고클릭시 홈 이동
    logo.click(()=>location.href='index.html');

    // 2-2. gnb메뉴 클릭시 카테고리 서브이동
    gnb.click(e=>console.log($(e.target).text().toLowerCase()))
        // location.href='category.html?cat='+)


});///////////JQB////////////