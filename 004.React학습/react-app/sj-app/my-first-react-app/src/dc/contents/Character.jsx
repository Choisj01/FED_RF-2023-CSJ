// 캐릭터페이지 메인 컨텐츠

import { Banner } from "./Banner";

export function Character(props) {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>캐릭터 페이지</h1>
            <Banner category={props.cat} />
        </>
    );
} /////////////Character컴포넌트/////////////
