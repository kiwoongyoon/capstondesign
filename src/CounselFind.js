
import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect } from 'react';
import Newheader from "./Newheader";
function Appmap() {
  
    //스크립트 파일 읽어오기
    const new_script = src => { 
      return new Promise((resolve, reject) => { 
        const script = document.createElement('script'); 
        script.src = src; 
        script.addEventListener('load', () => { 
          resolve(); 
        }); 
        script.addEventListener('error', e => { 
          reject(e); 
        }); 
        document.head.appendChild(script); 
      }); 
    };
    useEffect(() => { 
      //카카오맵 스크립트 읽어오기
      const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=45718c240a0f483e77408b48dd737ce1');
      //스크립트 읽기 완료 후 카카오맵 설정
      my_script.then(() => { 
        console.log('script loaded!!!');  
        const kakao = window['kakao']; 
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('map');
          const options = { 
            center: new kakao.maps.LatLng(37.552, 126.940), //좌표설정
            level: 3 
          }; 
          const map = new kakao.maps.Map(mapContainer, options); //맵생성
          //마커설정
          const markerPosition = new kakao.maps.LatLng(37.552, 126.940); 
          const marker = new kakao.maps.Marker({ 
            position: markerPosition
          }); 
          marker.setMap(map); 
        });   
      });
       
    }, []);
    //카카오 지도 기본 띄우기 
   

    
    return (
      <div className="App">
        <Newheader/>
        <div id="map" className="map"/>
      </div>
    );
  }
  
  export default Appmap;