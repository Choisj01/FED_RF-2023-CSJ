// 코믹스페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Comics() {
    return (
        <>
            <Banner category="COMICS" />
            <VidIntro cat="COMICS" cls="on"/>
        </>
    );
} /////////////Comics컴포넌트/////////////
