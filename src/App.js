import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './Main'; 
<<<<<<< HEAD
import Getstory from './Getstory';
import CounselFind from './CounselFind';
import NotFound from './NotFound';
import TestPage from './Main';
=======
import Gettext from './Gettext';
import NotFound from './NotFound';
import CounselFind from './CounselFind';
import Videorec from './Videorec';
import GetVoice from './GetVoice';
import ChooseWay from './ChooseWay';
>>>>>>> b9f1039eb8b5b33dfd6881d93efb1472881fd63a
function App() {
  return (
    <div className="App">
     <BrowserRouter>
<<<<<<< HEAD
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/getstory/*" element={< Getstory/>}></Route>
				<Route path="/counselfind/*" element={< CounselFind />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
=======
				
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
>>>>>>> b9f1039eb8b5b33dfd6881d93efb1472881fd63a
    </div>
  );
}

export default App;
