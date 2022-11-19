import { useEffect, useState } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import AIChat from "./AIChat";
import "./ChatbotPage.scss";
import $ from "jquery";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
require("jquery-mousewheel");

const ChatbotPage = () => {
  const [AI, setAI] = useState("저는 챗봇입니다. 당신의 고민을 들어드릴게요.");

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
    let msg = $(".message-input").val();
    if (msg.trim() === "") {
      return false;
    }
    AIChat({ question: AI, text: msg }).then((res) => {
      setAI(res);
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

  $(window).on("keydown", function(e) {
    if (e.which === 13) {
      InsertMessage();
      return false;
    }
  });

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
          <textarea
            type="text"
            class="message-input"
            placeholder="문장을 입력하세요..."
          ></textarea>
          <button type="submit" class="message-submit" onClick={InsertMessage}>
            전송
          </button>
        </div>
      </div>
      <div class="bg"></div>
      <Footer />
    </div>
  );
};

export default ChatbotPage;
