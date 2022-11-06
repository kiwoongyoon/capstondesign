import React from 'react'; 
import { useSpeechRecognition } from "react-speech-kit";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main'; 
import Getstory from './Getstory';
import NotFound from './NotFound';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
				
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/getstory/*" element={< Getstory/>}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
