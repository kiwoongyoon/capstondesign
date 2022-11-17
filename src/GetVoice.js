import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";
import { CiMicrophoneOn } from "react-icons/ci";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "./Header";
import { red } from "@mui/material/colors";
import { style } from "@mui/system";
const Styleddiv = styled.div`
  margin: 4rem;
`;
const Newimg = styled.img`
  width: 100px;
`;
const GetVoice = () => {
  const [listen, setListen] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <Header />
      <form>
        <Styleddiv>
          <p>
            <textarea cols="48" rows="5" defaultValue={transcript} />
          </p>
          <Newimg
            src={
              listening
                ? require("./images/onmic.png")
                : require("./images/blackmic.png")
            }
            alt="mic button"
            onClick={() => {
              if (listen === false) {
                resetTranscript();
                SpeechRecognition.startListening({
                  continuous: true,
                  language: "ko-KR",
                });
                setListen(true);
              }
              if (listen === true) {
                SpeechRecognition.stopListening();
                setListen(false);
                console.log({ transcript });
              }
            }}
          />
        </Styleddiv>
        <Styleddiv>
          <Link to="" style={{ textDecoration: "none" }}>
            <Button type="submit" color="primary" variant="contained">
              분석하기
            </Button>
          </Link>
        </Styleddiv>
      </form>
    </>
  );
};
export default GetVoice;