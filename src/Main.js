import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import sogang from "./images/sogang2.PNG";
import Appmap from "./CounselFind.js";

//백엔드에서 데이터 갖고 오는 함수
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
      <Header />
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
          <div className="main-features">
            <div className="main-feature-item">
              <h3 className="main-feature-title">AI 분석 모델</h3>
              <p className="text main-feature-description">
                기존의 수 많은 데이터를 통해 감정 분석 모델을 만들었습니다. 이를
                통한 여러분의 스트레스 해소 방안을 모색합니다.
              </p>
            </div>
            <div className="main-feature-item">
              <h3 className="main-feature-title">스트레스 해소용 영상 추천</h3>
              <p className="text main-feature-description">
                우울증 및 스트레스 해소 목적 개인 맞춤형 영상을 추천드립니다.
                개인화된 심리 안정제의 역할을 해드립니다.
              </p>
            </div>
            <div className="main-feature-item">
              <h3 className="main-feature-title">심리 상담소 안내 서비스</h3>
              <p className="text main-feature-description">
                현재 감정 상태에 따른 인근의 심리 상담소를 알려드립니다.
                심리치료에 대한 인식 개선을 위해 노력합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*<Realfeel />*/}
      {/*<CounselFind/>*/}
      {/* <Appmap/> */}

      <section className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">확인 가능한 감정 60가지</h2>
          <p className="lead text-center text-white mb-5">
            이 섹션을 포함한 아래 3개 섹션은 다음 commit에서 수정할 예정입니다.
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="" className="rounded-circle mb-3" alt="" />
                  <h3 className="card-title mb-3">감정1</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-0 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="quote">
                오늘 하루
                <br />
                <span className="text-warning">스트레스</span>를<br />
                날려보세요
              </h1>
            </div>
            <img
              className="img-fluid w-50 bg-secondary d-none d-sm-block"
              src="https://dy7glz37jgl0b.cloudfront.net/funnel/issue-test/helpme-hero-smaller.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="p-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
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
            <div className="col-md pt-lg-5">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location: </span>서강대학교
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">전화번호: </span>010-1234-5678
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">이메일: </span>sodfj@naver.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Main;
