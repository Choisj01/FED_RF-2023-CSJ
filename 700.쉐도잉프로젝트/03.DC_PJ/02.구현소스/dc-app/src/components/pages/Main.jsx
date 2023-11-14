// 메인페이지 메인컨텐츠

import { Banner } from "../modules/Banner";

export function Main() {
    // cat속성으로  메뉴분류 전달
    return (
        <>
            <h1 style={{ textAlign: "center" }}>메인페이지</h1>
            <Banner category="main" />
        </>
    );
} /////////////Main컴포넌트/////////////
