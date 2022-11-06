import React from "react";
import styled from "styled-components"; 
import {Link} from "react-router-dom";
import{RiHandHeartFill} from "react-icons/ri"
const Styleheader=styled.header`
    display: flex ;
    background-color:#F4F5E4;
    margin: 0px 0px 10px 0px ; 
    padding: 20px 600px 20px 0px ; 
    justify-content: flex-start;
`
const Styledp = styled.p`
    display: flex ;
    justify-content: space-between; 
    padding: 2px;
    margin: 2px;
`
const Newp= styled.p`
    width: 230px ;
    margin: 0px  ; 
`
const Newheader=()=>{
    return (
        <Styleheader>
             <Link to="/" style={{ textDecoration: "none" }}>
            <Styledp>
                <RiHandHeartFill/>
                <Newp>나만의 스트레스 해소 플랫폼</Newp>
            </Styledp>
            </Link>
        </Styleheader>
    )
}; 
export default Newheader; 

