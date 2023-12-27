import { Component } from "react";

import '../../css/weather.css';

// 여기서는 컴포넌트를 class로 만들어보자!!
// 컴포넌트 class는 기본적으로 Component 클래스를 상속받는다!
class Weather extends Component {
    // 생성자함수 호출!
    // -> constructor()
    constructor(props) {
        // 부모에게 전달변수를 전달한다!
        // 부모 클래스는 super 키워드로!
        super(props);
        // 생성자함수 구역에 멤버변수 즉, 클래스속성을
        // 만들면 이것이 상태변수가 된다!!!
        // 클래스 내부속성은 this키워드를 사용함!
        // 받아온 날씨정보를 셋업할 객체임!
        // state 이름의 상태변수에 setState()로 셋팅함!
        this.state = { temp: "", desc: "", icon: "", loading: true };
        // 함수형 컴포넌트처럼 useState()를 쓰지 않음!
        // -> 값의 셋팅은 setState() 라고 씀(함수형과 같지만 처음 선언시 없음)
    } //////// 생성자 함수 //////////

    // 컴포넌트 생성 후 날씨정보 조회하여 화면에 보이기
    // 함수형 컴포넌트에서는 랜더링 후는 useEffect() 이지만
    // 클래스형은 componentDidMount() 메서드 사용함!
    componentDidMount() {
        // [ 날씨 조회 정보 사이트 ]
        // https://openweathermap.org/

        // 1. 지정 도시명
        const cityName = "Seoul";
        // 2. 날씨정보 조회 키코드(로그인 사용자 키복사)
        const apiKey = "a7b9cdc4083c1b5e0dc5372cf29ae5a3";
        // 3. 날씨 정보조회 URL : 날씨정보 제이슨이 날아온다!
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        // 브라우저에 검증
        // http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=a7b9cdc4083c1b5e0dc5372cf29ae5a3

        // 소스샘플
        // https://openweathermap.org/api/one-call-3

        // fetch() 함수를 이용한 데이터 조회하기!
        fetch(url) // 파일받기
            .then((res) => res.json()) // json() 제이슨파일 형식 파싱
            .then((wdata) => {
                // 파일 파싱 후 내용읽기
                console.log(wdata,wdata.main.temp);

                // 상태변수인 wInfo에 값을 셋팅한다!
                // 셋팅용 상태변수 메서드형은 setState()
                // this키워드 사용!
                this.setState({ 
                    temp: wdata.main.temp,
                    desc: wdata.weather[0].description, 
                    icon: wdata.weather[0].icon, 
                    loading: false // 로딩여부끝(false) 
                })

            }) ////// 마지막 then /////
            // 에러시 처리
            .catch(err=>console.log(err));

    } //////// componentDidMount 메서드 ///////////

    // 컴포넌트 결과 랜더링 메서드 ////////
    // render()
    render(){
        // 아이콘 정보
        const isrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;

        // 로딩 중 loading 값이 true이면
        if(this.state.loading){
            return <h4>Loading...</h4>
        } ////// if /////
        // 로딩 성공시 loading 값이 false이면
        else{
            return(
                <div className="weather-bx">
                    <h4>Now Weather</h4>
                    <img src={isrc} alt="weather icon" />
                    <p>{this.state.temp}</p>
                    <p>{this.state.desc}</p>
                </div>
    
            )

        } //// else ///////



    } //////////// render 메서드 ///////////
} /////////////////// Weather 클래스 /////////////////////

export default Weather;
