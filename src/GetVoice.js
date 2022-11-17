import React,{useState}from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styled from "styled-components"; 
import{CiMicrophoneOn} from "react-icons/ci"
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
import Newheader from "./Newheader";
import { red } from "@mui/material/colors";
import { style } from "@mui/system";
const Styleddiv = styled.div`
    margin: 4rem ;  
`
const Newimg = styled.img`  
    width: 100px ; 

  `
const GetVoice=()=>{
    const[listen, setListen]=useState(false) ;
     const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  
    return (
        <>
        <Newheader></Newheader>
        <form>
        <Styleddiv>
        <p><textarea cols="48" rows="5" value="hihi" >{transcript}</textarea></p>
        <Newimg src={listening ? require('./images/onmic.png'): require('./images/blackmic.png')} 
             
        alt="" onClick={()=>{
           if(listen===false){
              alert('speak now');
              SpeechRecognition.startListening({continuous:true, language:'ko'});
              setListen(true);
              console.log({transcript}); 
           }
           if(listen===true){
            SpeechRecognition.stopListening();
            resetTranscript();
            setListen(false) ;
            console.log("it is end"); 
           }
        }}/>
      </Styleddiv>
      <Styleddiv >      
        <Link to ="" style={{ textDecoration: "none" }}>
        <Button type="submit"color="primary" variant="contained" >분석하기</Button>
        </Link>
      </Styleddiv>
      </form>
        </>
    ); 
}; 
export default GetVoice ; 