import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Newheader from "./Newheader";
import axios from "axios";
import sogang from "./images/sogang2.PNG";
import Appmap from "./CounselFind.js";

const Newdiv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 0rem;
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
          {origins.name} {origins.feel}
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
      <section className="main-section dark-mode">
        <div className="margin-auto">
          <h1 className="quote rainbow-mode">
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
          <div className="main-actions">
            <p className="margin-button">
              <Link to="./choose" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className="button button_primary"
                  style={{ textDecoration: "none" }}
                >
                  Get Started
                </Button>
              </Link>
              <Link to="./counselfind" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className="button button_outline"
                  style={{ textDecoration: "none" }}
                >
                  인근 상담소 검색
                </Button>
              </Link>
            </p>
          </div>
          <div className="main-actions">
            <p className="margin-contributor text">
              <a target="_blank" href="/contributors" className="actions-logo">
                <img
                  src={require("./images/logo.png")}
                  alt="team logo"
                  width="32"
                  height="32"
                />
              </a>
              <span className="kto-text kto-text_size_s">
                Developed by
                <a target="_blank" href="/contributors" className="link-theme">
                  팀명이 없는 팀
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      {/*<Realfeel />*/}
      {/*<CounselFind/>*/}
      {/* <Appmap/> */}
      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                오늘 하루 <span class="text-warning">스트레스</span>를
                날려보세요
              </h1>
            </div>
            <img
              class="img-fluid w-50 bg-secondary d-none d-sm-block"
              src="https://dy7glz37jgl0b.cloudfront.net/funnel/issue-test/helpme-hero-smaller.jpeg"
              alt=""
            />
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
                  <p class="card-text">
                    기존의 수 많은 데이터를 통해 감정 분석 모델을 만들었습니다.
                    이를 통한 여러분의 스트레스 해소 방안을 모색합니다.
                  </p>
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
                  <p class="card-text">
                    우울증 및 스트레스 해소 목적 개인 맞춤형 영상을
                    추천드립니다. 개인화된 심리 안정제의 역할을 해드립니다.{" "}
                  </p>
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
                  <p class="card-text">
                    현재 감정 상태에 따른 인근의 심리 상담소를 알려드립니다.
                    심리치료에 대한 인식 개선을 위해 노력합니다.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="p-5 bg-primary">
        <div class="container">
          <h2 class="text-center text-white">고칠 수 있는 것들</h2>
          <p class="lead text-center text-white mb-5">
            이러한 감정들을 갖고 있으면 사용해보세요
          </p>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="p-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact Info</h2>
              <ul class="list-group-flush lead">
                <li class="list-group-item">
                  <span class="fw-bold">Main Location:</span>서강대학교
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">전화번호:</span>010-1234-5678
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">이메일:</span>sodfj@naver.com
                </li>
              </ul>
            </div>
            <div class="col-md">
              <div id="map">
                <img
                  src={sogang}
                  style={{
                    width: "600px",
                    height: "400px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="p-5 bg-primary text-white text-center position-relative">
        <div class="container text-center">
          <p class="lead text-center">Copyright &copy:팀명이 없는 팀</p>

          <Link to="/">
            <i class="bi bi-twitter text-dark mx-1"></i>
          </Link>
          <Link to="/">
            <i class="bi bi-facebook text-dark mx-1"></i>
          </Link>
          <Link to="/">
            <i class="bi bi-linkedin text-dark mx-1"></i>
          </Link>
          <Link to="/">
            <i class="bi bi-instagram text-dark mx-1"></i>
          </Link>

          <div class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up-circle h1"></i>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Main;
