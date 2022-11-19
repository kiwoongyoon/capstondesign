import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "pages/App/App.css";
import Main from "pages/Main/Main";
import Gettext from "pages/Choose/Gettext";
import NotFound from "pages/NotFound/NotFound";
import CounselFind from "pages/Counsel/CounselFind";
import Videorec from "pages/VideoRecommend/Videorec";
import GetVoice from "pages/Choose/GetVoice";
import ChooseWay from "pages/Choose/ChooseWay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/choose/*" element={<ChooseWay />}></Route>
          <Route path="/choose/gettext/*" element={<Gettext />}></Route>
          <Route path="/choose/getvoice/*" element={<GetVoice />}></Route>
          <Route path="/counselfind/*" element={<CounselFind />}></Route>
          <Route path="/videorecommend/*" element={<Videorec />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
