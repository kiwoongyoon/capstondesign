import React,{useState, useEffect} from "react";
import styled from "styled-components"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
import Newheader from "./Newheader";
import axios from 'axios'; 
import Appmap from "./CounselFind.js";

const Newdiv =styled.div`
   font-size: 11px ;
   margin: 4rem ;  
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
        <Realfeel/>
        <Newdiv >    
            
            <h1>오늘 하루 스트레스를 날려보세요</h1>
            <Link to ="./choose" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ textDecoration: "none" }}>Get Started</Button>
            </Link>
            <Link to ="./counselfind" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ textDecoration: "none" }}>Find hospital</Button>
            </Link>
            
        </Newdiv>
        
        </>
    );
}; 
export default Main;