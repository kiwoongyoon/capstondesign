import React,{useState, useEffect} from "react";
import styled from "styled-components"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import Newheader from "./Newheader";
import axios from 'axios'; 
import Appmap from "./CounselFind.js";
const Newdiv =styled.div`
   position: relative ;
   display : block ; 
   font-size: 14px ;
   margin: 0rem ;  
`
const Newsection=styled.div`
    background-color: yellow ; 
    height:540px ;
    width: 100%; 
`
const Realfeel =()=>{
    const[error, setError] = useState(null) ; 
    const [origin ,setOrigin] = useState(null) ;
    useEffect(()=>{
        const fetchFeels = async()=>{
            try{
                setOrigin(null) ;
                //프록시 설정으로 인해서 뒤의 부분만 axios에 적어준다
                const response = await axios.get(
                    '/list'
                );
                setOrigin(response.data); 
            }catch(e){
                setError(e) ; 
            }

        }  ;
        fetchFeels();
    }
    ,[]);
    console.log(origin); 
    if(error)return <div>error is ...</div>; 
    if(!origin)return <div>fuck</div>
    return (
        <ul>
            {origin.feelings.map(origins=>(
                <li key={origins.id}>
                    {origins.name} {origins.feel}
                </li>
            ))
            }
        </ul>
    );
    //백엔드에서 데이터 갖고오는 함수
}
const Main =(props)=>{
    return(
        <>
        <Newheader/>
        {/* <CounselFind/> */}
        {/* <Appmap/> */}
        {/* <Realfeel/> */}


        <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start" >
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div >        
            <h1>오늘 하루 <span class="text-warning">스트레스</span>를 날려보세요</h1>
            <Link to ="./choose" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ textDecoration: "none" }}>Get Started</Button>
            </Link>
            <Link to ="./counselfind" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ textDecoration: "none" }}>Find hospital</Button>
            </Link>
                </div>   
                <img 
                    class="img-fluid w-50 bg-secondary d-none d-sm-block"
                    src="https://dy7glz37jgl0b.cloudfront.net/funnel/issue-test/helpme-hero-smaller.jpeg" 
                    alt=""/>
            </div>
        </div>
        </section>

        <section class="p-5">
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class=""></i>
                                </div>
                                <h3 class="card-title mb-3">심리상담</h3>
                                <p class="card-text">기존의 수 많은 데이터를 통해 
                                감정 분석 모델을 만들었습니다. 이를 통한 여러분의
                                스트레스 해소 방안을 모색합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-secondary text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class=""></i>
                                </div>
                                <h3 class="card-title mb-3">심리상담</h3>
                                <p class="card-text">우울증 및 스트레스 해소 목적
                                개인 맞춤형 영상을 추천드립니다. 개인화된 심리 안정제의
                                역할을 해드립니다. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class=""></i>
                                </div>
                                <h3 class="card-title mb-3">심리상담</h3>
                                <p class="card-text">현재 감정 상태에 따른 인근의 
                                심리 상담소를 알려드립니다. 심리치료에 대한 인식 개선을
                                위해 노력합니다. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}; 
export default Main;