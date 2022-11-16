import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main'; 
import Gettext from './Gettext';
import NotFound from './NotFound';
import CounselFind from './CounselFind';
import Videorec from './Videorec';
import GetVoice from './GetVoice';
import ChooseWay from './ChooseWay';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
				
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/choose/*" element={<ChooseWay/>}></Route>
					<Route path="/choose/gettext/*" element={<Gettext/>}></Route>
					<Route path="/choose/getvoice/*" element={<GetVoice/>}></Route>
					<Route path="/counselfind/*" element={< CounselFind/>}></Route>
					<Route path="/videorecommend/*" element={<Videorec/>}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
