// 게임페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/vidintro";

export function Games() {
    return (
        <>
            <VidIntro cat="GAMES" cls="on" />
            <Banner category="GAMES" />
        </>
    );
} /////////////Games컴포넌트/////////////
