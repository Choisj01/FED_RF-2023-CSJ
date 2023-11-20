// DC.com  비디오 스와이퍼 하위 스와이퍼 플러그인 컴포넌트 - SwiperApp.jsx

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리 넣기  */
import $ from "jquery";

// SwiperVid 사용 데이터 가져오기
import { swVidData } from "../data/swiper_vid";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
// 양쪽이동버튼만 필요함!

/* 폰트어썸 임포트 */
import { faCirclePlay, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼CSS
import "./css/swiper_vid.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Navigation } from "swiper/modules";

export function SwiperVid() {

  // 선태 데이터 : 여기서는 그대로 가져온다
  const selData = swVidData;

  // 비디오 보이기 함수
  const showVid = (src,tit) => {
    // src - 비디오 경로 / tit - 비디오제목
    console.log(src,tit);
    // 1. 대상선정
    // 1-1. 아이프레임 : .play-vid iframe
    const ifr =$('.play-vid iframe');
    // 1-2.전체 박스:.vid-bx
    const vbx = $('.vid-bx');
    // 1-3. 타이틀 박스 : .ifr-tit
    const itit = $('.ifr-tit');

    // 2. 변경하기
    // 2-1.아이프레임 src경로 넣기
    ifr.attr('src',src);
    // 2-2. 비디오 타이틀 넣기
    itit.text(tit);
    // 2-3. 비디오 전체박스 나타나기
    vbx.fadeIn(300);

  }; /////////////showVid함수//////////////

  // 리턴코드 ///////////////////////////////
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20} 
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        className="mySwiper"
      >
        {
            selData.map((v,i)=>
            <SwiperSlide key={i}>
                <section className="sw-inbox" 
                /* 비디오 보디익 함수 호출
                (비디오 경로,비디오 제목을 보내줌! ) */
                onClick={()=>showVid(v.vsrc,v.tit)}>
                  {/* 동영상 이미지 박스 */}
                  <div className="vid-img">
                    <img src={v.isrc} alt={v.tit} />
                    {/* 폰트어썸 아이콘 */}
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      style={{
                      position:'absolute',
                      bottom:'55%',
                      left:'10%',
                      color:'#fff',
                      fontSize:'50px'
                      }}/>
                    
                  </div>
                  {/* 동영상 타이틀 박스 */}
                  <div className="vid-tit">
                    <h4>{v.cat}</h4>
                    <h3>{v.tit}</h3>
                  </div>
                </section>
            </SwiperSlide>)
        }        
       
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////