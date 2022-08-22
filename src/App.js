import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Switch, Link  } from "react-router-dom";
import './App.css';
import Subsciber from './components/Subsriber';
import Queue1 from './components/Queue1';
import Queue2 from './components/Queue2';
import Queue3 from './components/Queue3';


function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Subsciber />} />
              {/* <Route path="/queue1" element={<Queue1 />} />
              <Route path="/queue2" element={<Queue2 />} />
              <Route path="/queue3" element={<Queue3 />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
