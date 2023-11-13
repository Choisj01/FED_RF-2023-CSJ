// 메인페이지 JS - index.js
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { TopArea } from "./layout/TopArea";
import { MainArea } from "./layout/MainArea";
import { FooterArea } from "./layout/FooterArea";

function App() {

    return(
      <>
        <TopArea/>
        <MainArea/>
        <FooterArea/>
      </>
    );
} //////////App 컴포넌트 /////////////////

// 출력하기 ////////
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
