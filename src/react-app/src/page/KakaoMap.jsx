import React from 'react'
import gredientMap from "./gredient.png";
import axios from 'axios';

class KakaoMap extends React.Component{

    // getTestApi = () =>{
    //     axios
    //
    // }

    render() {
        return(
            <div>
                <header >
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {/*<p>*/}
                    {/*  Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                    {/*  className="App-link"*/}
                    {/*  href="https://reactjs.org"*/}
                    {/*  target="_blank"*/}
                    {/*  rel="noopener noreferrer"*/}
                    {/*>*/}
                    {/*  Learn React*/}
                    {/*</a>*/}
                </header>
                <main>
                    <div>
                        <div>
                            <h1>hello 베리어 프리 프로젝트 시작입니다.</h1>
                            <button >hello</button>
                            <img src={gredientMap} alt = 'map'/>
                            <h5></h5>
                        </div>



                    </div>


                </main>
            </div>
        )

    }
}export default KakaoMap;