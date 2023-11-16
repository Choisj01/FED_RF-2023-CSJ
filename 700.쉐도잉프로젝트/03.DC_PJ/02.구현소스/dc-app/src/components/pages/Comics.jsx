// 코믹스페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/vidintro";

export function Comics() {
    return (
        <>
            <VidIntro cat="COMICS" cls="on"/>
            <Banner category="COMICS" />
        </>
    );
} /////////////Comics컴포넌트/////////////
