import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Newheader from "./Newheader";
import axios from "axios";
import Appmap from "./CounselFind.js";
import "./main.css";

const Newdiv = styled.div`
  font-size: 11px;
  margin: 4rem;
`;
//백엔드에서 데이터 갖고오는 함수
const Realfeel = () => {
  const [error, setError] = useState(null);
  const [origin, setOrigin] = useState(null);
  useEffect(() => {
    const fetchFeels = async () => {
      try {
        setOrigin(null);
        //프록시 설정으로 인해서 뒤의 부분만 axios에 적어준다
        const response = await axios.get("/list");
        setOrigin(response.data);
      } catch (e) {
        setError(e);
      }
    };
    fetchFeels();
  }, []);
  console.log(origin);
  if (error) return <div>error is ...</div>;
  if (!origin) return <div>fuck</div>;
  return (
    <ul>
      {origin.feelings.map((origins) => (
        <li key={origins.id}>
          {origins.name}
          {origins.feel}
        </li>
      ))}
    </ul>
  );
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Main = (props) => {
  var random = getRandom(1, 8);
  return (
    <>
      <Newheader />
      <section class="main-section dark-mode">
        <div class="margin-auto">
          <h1 class="quote rainbow-mode">
            <div>
              {
                {
                  1: (
                    <span>
                      다람쥐 헌<br />
                      쳇바퀴에 타고파.
                    </span>
                  ),
                  2: (
                    <span>
                      Lorem ipsum dolor sit amet, <br />
                      consectetur adipiscing elit
                    </span>
                  ),
                  3: (
                    <span>
                      int main(void)
                      <br />
                      printf("hello, world\n");
                    </span>
                  ),
                  4: (
                    <span>
                      나에게 철학이 있어. 어려운 일이 있다면
                      <br />
                      언젠가는 좋은 일도 있다는 거야.
                    </span>
                  ),
                  5: (
                    <span>
                      더 많이 사랑하는 것 외에 다른
                      <br />
                      사랑의 치료약은 없다.
                    </span>
                  ),
                  6: (
                    <span>
                      넌 나에게 이 세상
                      <br />
                      어떤 것보다도 의미있는 사람이야.
                    </span>
                  ),
                  7: (
                    <span>
                      상처받은 것을 치유하고,
                      <br />
                      정해진 운명을 바꿔.
                    </span>
                  ),
                  8: (
                    <span>
                      역경 속에서 피어난 꽃이
                      <br />
                      가장 흔치 않고 아름다운 꽃이다.
                    </span>
                  ),
                }[random]
              }
            </div>
          </h1>
          <div class="main-actions">
            <p class="margin-button">
              <Link to="./choose" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  class="button button_primary"
                  style={{ textDecoration: "none" }}
                >
                  Get Started
                </Button>
              </Link>
              <Link to="./counselfind" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  class="button button_outline"
                  style={{ textDecoration: "none" }}
                >
                  인근 상담소 검색
                </Button>
              </Link>
            </p>
          </div>
          <div class="main-actions">
            <p class="margin-contributor text">
              <a target="_blank" href="/contributors" class="actions-logo">
                <img
                  src={require("./images/logo.png")}
                  alt="team logo"
                  width="32"
                  height="32"
                />
              </a>
              <span class="kto-text kto-text_size_s">
                Developed by
                <a target="_blank" href="/contributors" class="link-theme">
                  팀명이 없는 팀
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Realfeel />
      {/*<CounselFind/>*/}
      {/* <Appmap/> */}
    </>
  );
};
export default Main;
