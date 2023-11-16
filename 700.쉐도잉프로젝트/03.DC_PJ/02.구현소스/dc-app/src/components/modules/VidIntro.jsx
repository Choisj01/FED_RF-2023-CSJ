// DC PJ 비디오 소개 컴포넌트 

// 구조정의 :  
//Root > video box(>video+img) + title box(>heading+p tag) 


export function VidIntro(){

    return(
        <section className="vidbox">
            {/* 1. 비디오 파트 */}
            <div className="vb1">
                <iframe src="" title=""></iframe>
            </div>
            {/* 2. 타이틀/설명 파트 */}
            <div className="vb2">
                {/* 작은 제목 */}
                <h3></h3>
                {/* 큰제목 */}
                <h2></h2>
                {/* 요약소개 */}
                <p></p>
                {/* 설명 (링크포함) */}
                <p></p>

            </div>
        </section>
    );
}