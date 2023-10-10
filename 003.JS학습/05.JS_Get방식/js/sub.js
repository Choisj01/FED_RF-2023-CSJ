// JS 페이지간 데이터 전달하기 : 서브페이지 JS - sub.js

// 넘어온 URL 파라미터값 받기
// location.href 를 오른쪽에 쓰면 상단의 url 값을 읽어온다!(2바이트값의 언어는 링크가 깨짐(한국어나 일본어등의 2바이트 문자한정))
let pm = location.href;

// ?(물음표)로 잘라서 뒤엣것!
// split(자를기준 문자열) -> 배열데이터가 됨!
pm = pm.split('?')[1];

// =(이퀄)로 잘라서 뒤엣것!
pm = decodeURIComponent(pm.split('=')[1]);
console.log('URL:',pm);

