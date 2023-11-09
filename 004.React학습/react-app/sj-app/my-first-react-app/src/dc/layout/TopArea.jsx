// DJ.com PJ 상단영역 컴포넌트
// GNB 데이터
import { Logo } from "../contents/Logo";
import { menu } from "../data/gnb";

export function TopArea(props){
    // chgFn 속성 - 메인함수인 chgMenu() 호출

    return(
        <>
        {/* 1. 상단영역 */}
        <header className="top-area">
            {/* 네비게이션 GNB */}
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo/>
                    </li>
                    {
                        
                        menu.map((v,i)=>
                        <li key={i}
                        onClick={
                            ()=>
                            props.chgFn(v.txt=="Home"?"main":v.txt)
                                }>
                            <a href="#">{v.txt}</a>
                        </li>
                        /* 
                            map()을 사용하여 태그를 생성할떄
                            데이터의 유일키를 key속성으로 만들지 않으면
                            아래와 같은 에러가 발생함! 
                            (이유 : 구별되는 항목으로 나중에 업데이트시 
                                이용할 수 있도록 리액트에서 강제하고 있음!)
                            Warning: Each child in a list 
                            should have a unique "key" prop.
                        */
                            )
                    }
                </ul>
            </nav>
        </header>
        </>
    );
}