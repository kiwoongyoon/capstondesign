import React from 'react'; 
import { useSpeechRecognition } from "react-speech-kit";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './Main'; 
import Getstory from './Getstory';
import CounselFind from './CounselFind';
import NotFound from './NotFound';
import TestPage from './Main';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/getstory/*" element={< Getstory/>}></Route>
				<Route path="/counselfind/*" element={< CounselFind />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
