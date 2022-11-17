import React, {useState, useEffect} from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
import Newheader from "./Newheader";
import axios from 'axios';
import Appmap from "./CounselFind.js";
import "./main.css";

const Newdiv = styled.div `
   font-size: 11px ;
   margin: 4rem ;  
`
//백엔드에서 데이터 갖고오는 함수
const Realfeel = () => {
    const [error, setError] = useState(null);
    const [origin, setOrigin] = useState(null);
    useEffect(() => {
        const fetchFeels = async () => {
            try {
                setOrigin(null);
                //프록시 설정으로 인해서 뒤의 부분만 axios에 적어준다
                const response = await axios.get('/list');
                setOrigin(response.data);
            } catch (e) {
                setError(e);
            }

        };
        fetchFeels();
    }, []);
    console.log(origin);
    if (error) 
        return <div>error is ...</div>;
    if (!origin) 
        return <div>fuck</div>
    return (
        <ul>
            {
                origin
                    .feelings
                    .map(origins => (
                        <li key={origins.id}>
                            {origins.name}
                            {origins.feel}
                        </li>
                    ))
            }
        </ul>
    );
}

const Main = (props) => {
    return (
        <>
            < Newheader />
            {/*<CounselFind/>*/}
            {/* <Appmap/> */}
            < Realfeel />
            <section class="main-quotes overview darkmode">
            <div class="margin-auto">
                <h1 class="quote">
                    <span>다람쥐 헌<br/>쳇바퀴에 타고파.</span>
                </h1>
                <div class="main-actions">
                    <p class="margin-button">
                        <a class="button button_primary" href="/docs/getting-started.html">Get started</a>
                            <a class="button button_outline" href="#why-kotlin">인근 상담소 확인</a>
                            <Link to ="./choose" style={{ textDecoration: "none" }}>
                                <Button variant="contained" style={{ textDecoration: "none" }}>Get Started</Button>
                            </Link>
                            <Link to ="./counselfind" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ textDecoration: "none" }}>Find hospital</Button>
            </Link>
                    </p>
                    <p class="margin-contributor text">
                        <a target="_blank" href="/contributors" class="actions-logo"><img src={require("./images/logo.png")} alt="team logo" width="32" height="32"/></a>
                        <span class="kto-text kto-text_size_s">
                            Developed by
                            <a target="_blank" href="/contributors" class="link-theme">팀명이 없는 팀</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </>
    );
};
export default Main;