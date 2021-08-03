import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from "./page/main";
import KakaoMap from "./page/KakaoMap";

function App() {
  return (
    <>
        <Router>
            {/*<Main/>*/}
            {/*<KakaoMap/>*/}
            <Route path="/" exact={true} component={Main} />
            <Route path="/KakaoMap" component={KakaoMap} />
        </Router>
    </>
  );
}

export default App;
