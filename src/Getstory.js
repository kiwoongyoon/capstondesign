import React,{Component}from "react";
import Chatbot from "react-chatbot-kit"; 
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

import styled from "styled-components"; 
import{CiMicrophoneOn} from "react-icons/ci"
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
import Newheader from "./Newheader";
const Styleddiv = styled.div`
    margin: 4rem ;  
`
const Textbox = styled.p`
    border-radius: 1rem ;
    background-color: skyblue;
    margin: 0 auto 10px auto; 
    width:360px ;
    padding :10px ;
`
const Getstory =(props)=>{    

    return(
    <>
      <Newheader></Newheader>
      <div><Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> </div>


      <div > 
        <Textbox>Lorem Ipsum is simply dummsy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Textbox>
        <Textbox>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Textbox>
       
      </div>
      <form>
      <div>
        <p><textarea cols="48" rows="5"></textarea></p>
        <CiMicrophoneOn onClick={()=>{
            alert('start speaking');
        }}/>
      </div>
      <Styleddiv >      
        <Link to ="" style={{ textDecoration: "none" }}>
        <Button type="submit"color="primary" variant="contained" >분석하기</Button>
        </Link>
      </Styleddiv>
      </form>      
    </>
    );
}; 


export default Getstory;