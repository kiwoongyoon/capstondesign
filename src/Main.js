import React from "react";
import styled from "styled-components"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
import Newheader from "./Newheader";

const Newdiv =styled.div`
   font-size: 11px ;
   margin: 4rem ;  
`
const Main =(props)=>{
    return(
        <>
        <Newheader></Newheader>
        <Newdiv >    
            
            <h1>오늘 하루 스트레스를 날려보세요</h1>
            <Link to ="./getstory" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ textDecoration: "none" }}>Get Started</Button>
            </Link>
            
        </Newdiv>
        </>
    );
}; 
export default Main;