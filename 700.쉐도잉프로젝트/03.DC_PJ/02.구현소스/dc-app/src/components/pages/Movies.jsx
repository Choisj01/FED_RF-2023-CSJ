// 무비페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/vidintro";

export function Movies() {
    return (
        <>
            <VidIntro cat="MOVIES" cls="on"/>
            <Banner category="MOVIES"/>
        </>
    );
} /////////////Movies컴포넌트/////////////
