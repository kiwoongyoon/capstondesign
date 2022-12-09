import Header from "components/Header";
import Footer from "components/Footer";
import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Loading from './Loading';
import axios from "axios";

const Analyze = () => {
    const [loading, setLoading] = useState(true);
    const [emote, setEmote] = useState("");
    const [score, setScore] = useState("");
    const [youtube, setYoutube] = useState("");
    
    const location = useLocation();
    console.log(location);
    
    async function SendNodejs({ text }) {
        try{
            const response = axios
                .post("api/emotion", text)
                .then((res) => {
                    setLoading(false);
                    //console.log(res);
                    return res.data;
                })
                .catch((e) => {
                    console.error(e);
                    return e;
                });
            //console.log(response);
            return response;
            } catch(e) {
                console.log(e);
            }
    }

    useEffect(() => {
        SendNodejs({ text: location.state.data })
            .then((res)=>{
                console.log(res);
                setEmote(res.emotion.emotion);
                setScore(res.emotion.score);
                setYoutube(res.youtube[0].id.videoId);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [location.state.data]);

    return(
        <div class="d-flex flex-column min-vh-100">
            <Header />
            {loading ? <Loading /> : <>
            <div>
                <h1>분석 결과</h1><br/>
                <h3>당신의 현재 감정은 <h1>{emote}</h1> 입니다.</h3><br/>
                <h3>당신의 감정 점수는 <h1>{score}</h1> 입니다.</h3><br/>
            </div>
            <div class="videoWrapper">
                <iframe src={`https://www.youtube.com/embed/${youtube}?controls=0&autoplay=1&autoplay=1&loop=1&playlist=${youtube}`}
                    style={{ width: "50%", height: "50%"}}
                    allow="autoplay; fullscreen"
                    title='감정 기반 추천 영상'>
                </iframe>
            </div>
            </>
            }
            <Footer />
        </div>
    );
};

export default Analyze;