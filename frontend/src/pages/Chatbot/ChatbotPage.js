import { useEffect, useState } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import SpeechRec from "./SpeechRec";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./ChatbotPage.scss";
import $ from "jquery";
import OpenAIChat from "./OpenAIChat";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
require("jquery-mousewheel");

function ChatbotPage() {
  const [AI, setAI] = useState(
    "안녕하세요, 서강대학교 심리상담 AI 김서강입니다. 당신의 고민을 들어드릴게요."
  );
  const [archive, setArchive] = useState(
    "AI: 안녕하세요, 서강대학교 심리상담 AI 김서강입니다. 당신의 고민을 들어드릴게요."
  );

  const [archive_ans, setArchive_ans] = useState("");

  const [isListen, toggleListen] = useState(false);
  let $messages = $(".messages-content"),
    d,
    h,
    m;

  useEffect(() => {
    $messages.mCustomScrollbar();
    loadMessage();
  }, []);

  useEffect(() => {
    newMessage();
  }, [AI]);

  function updateScrollbar() {
    $messages
      .mCustomScrollbar("update")
      .mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 10,
        timeout: 0,
      });
  }
  function setDate() {
    d = new Date();
    if (m !== d.getMinutes()) {
      h = d
        .getHours()
        .toString()
        .padStart(2, "0");
      m = d
        .getMinutes()
        .toString()
        .padStart(2, "0");
      $('<div class="timestamp">' + h + ":" + m + "</div>").appendTo(
        $(".message:last")
      );
    }
  }

  function InsertMessage() {
    toggleListen(false);
    let msg = $(".message-input").val();
    if (msg.trim() === "") {
      return false;
    }
    console.log(archive+"\n"+msg);
    OpenAIChat({ question: archive, text: msg }).then((e) => {
      setAI(e);
      if (msg.charAt(msg.length-1) === '\n') {
        msg = msg.slice(0, -1);
      }
      let temp = msg.charAt(msg.length - 1);
      if (temp !== "." && temp !== "?" && temp !== "!") {
        msg += ".";
      }
      setArchive_ans(archive_ans + " " + msg);
      setArchive(archive + "\nHuman: " + msg + "\nAI: " + e);
    });
    $('<div class="message message-personal">' + msg + "</div>")
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    $(".message-input").val(null);
    updateScrollbar();
    setTimeout(function() {
      loadMessage();
    }, 1000);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      InsertMessage();
    }
  };

  function loadMessage() {
    if ($(".message-input").val() !== "") {
      return false;
    }
    $(
      '<div class="message loading new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure><span></span></div>'
    ).appendTo($(".mCSB_container"));
    updateScrollbar();
  }

  function newMessage() {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>' +
        AI +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
  }

  return (
    <div class="d-flex flex-column min-vh-100">
      <Header />
      <div class="chat">
        <div class="chat-title">
          <h1>김서강</h1>
          <h2>서강대학생 전문 AI 심리 상담사</h2>
          <figure class="avatar">
            <img src={require("assets/images/logo.png")} alt="Bot" />
          </figure>
        </div>
        <div class="messages">
          <div class="messages-content mCustomScrollbar _mCS_1"></div>
        </div>
        <div class="message-box">
          <SpeechRec
            isListen={isListen}
            toggleListen={toggleListen}
            handleKeyPress={handleKeyPress}
          />
          <button type="submit" class="message-submit" onClick={InsertMessage}>
            전송
          </button>
        </div>
      </div>
      <div class="bg" />
      {archive_ans.length>=30? <Link to={{pathname: "../analyze"}} state= {{data: archive_ans}} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          class="button button_primary analyze-button"
          style={{ textDecoration: "none" }}
        >
          챗봇과 대화 종료하기
        </Button>
      </Link> : <Button
          variant="contained"
          class="button button_secondary analyze-button"
          style={{ textDecoration: "none" }}
        >
          분석 전 30자 이상 입력해주세요
        </Button>}
      <Footer />
    </div>
  );
}

export default ChatbotPage;
