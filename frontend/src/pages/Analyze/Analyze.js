import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Loading from './Loading';
import axios from "axios";

const Analyze = () => {
    const [loading, setLoading] = useState(true);
    
    const location = useLocation();
    console.log(location);
    
    async function SendNodejs({ text }) {
        try{
            const responce = axios
                .post("api/emotion", text)
                .then((res) => {
                    setLoading(false);
                    console.log(res);
                    return res.data;
                })
                .catch((e) => {
                    console.error(e);
                    return e;
                });
            console.log(responce);
            } catch(e) {
                console.log(e);
            }
    }

    useEffect(() => {
        SendNodejs({ text: location.state.data });
    }, [location.state.data]);

    return(
        <>
            {loading ? <Loading /> : <div>page loaded!!</div>}
        </>
    );
};

export default Analyze;