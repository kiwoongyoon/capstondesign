import React, { useState,useEffect } from 'react';
import MapContainer from "pages/Counsel/mapContainer";
import Button from "@mui/material/Button";
import Header from 'components/Header';
import Footer from 'components/Footer';

const { kakao } = window
function LandingPage() {
  var geocoder = new kakao.maps.services.Geocoder();
  const[Address, setAddress] = useState('')
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')
  const[check, setCheck] = useState(0) ; 
  const[state, setState] = useState({
    center: {
      lat: 35.1595,
      lng: 126.852,
    },
    errMsg: null,
    isLoading: true,
  }); 
//////////////////변수들 //////////////////////////

  const onChange = (e) => {
    // const placeAdded = (e.target.value).concat(' ', '심리상담소'); 
    const place = e.target.value ; 
    setInputText(place)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText.concat(' ', '심리상담소'))
    setInputText('')
  }
//////////////기존의 함수들//////////////////
const findLatlng =()=>{
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          },
          isLoading: false,
        }))
      },
      (err) => {
        setState((prev) => ({
          ...prev,
          errMsg: err.message,
          isLoading: false,
        }))
      }
    )
   
  }
   else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    setState((prev) => ({
     ...prev,
      errMsg: "geolocation을 사용할수 없어요..",
      isLoading: false,
    }))
  }
   return state ;
}
const latToAddress=(userState)=>{
  var coord = new kakao.maps.LatLng(userState.center.lat,userState.center.lng) ; 
  var callback = function(result, status){
    if(status===kakao.maps.services.Status.OK){
      setAddress(result[0].address.region_2depth_name); 
      // console.log(result[0]); 
      // console.log(Address) ; 
      
    }
  }
  geocoder.coord2Address(coord.getLng(),coord.getLat(),callback);
  return Address; 
}

   async function getLat(){
     var userState = await findLatlng();//비동기로 실행하고 그 이후에 주소 반환하기 
     var userGu = await latToAddress(userState) ;
    //  console.log(Address); 
    //  console.log(userGu); 
     setPlace(Address.concat('', '심리상담소'))
   }

  // useEffect(()=>{
  //   getLat(); 
  // }, []); 

  useEffect(()=>{
    getLat(); 
  },[Address, check]); 
  



  /////////////////
  return (
    <div class="d-flex flex-column min-vh-100">
      <Header />
      <form className="inputForm" onSubmit={handleSubmit}   
      style={{
        margin: "0px 0px 0px 0px",
      }}>
        <input placeholder="지역을 입력해주세요(ex: 신촌)" required onChange={onChange} value={InputText} 
         class="btn btn-secondary placeholder col-4 mt-3 mg" 
         style={{
            cursor: "text",
            
         }}
        />
        <Button class="mg message-search" type="submit">검색</Button>
        <Button class="mg message-gps" onClick={()=>{setCheck(check+1)}}>주변 상담소 찾기</Button>
      </form>

      <MapContainer searchPlace={Place} />
      <Footer />
    </div>
  )
}

export default LandingPage