import React from "react";
import './assets/css/main.css'


class main extends React.Component{


    render() {
        return (
            <div>
                <div id="wrapper">
                    <div id="bg"></div>
                    <div id="overlay"></div>
                    <div id="main">

                        <header id="header">
                            <h1>더불 U</h1>
                            <p>KOREA UNIVERSITY &nbsp;&bull;&nbsp; 공:용화하다 &nbsp;&bull;&nbsp; KU DATA TONE</p>
                            <nav>
                                <ul>
                                    <li><a href="#" className="icon brands fa-twitter"><span
                                        className="label">Twitter</span></a></li>
                                    <li><a href="#" className="icon brands fa-facebook-f"><span
                                        className="label">Facebook</span></a></li>
                                    <li><a href="KakaoMap" className="icon brands fa-dribbble"><span
                                        className="label">Dribbble</span></a></li>
                                    <li><a href="#" className="icon brands fa-github"><span
                                        className="label">Github</span></a></li>
                                    <li><a href="#" className="icon solid fa-envelope"><span
                                        className="label">Email</span></a></li>
                                </ul>
                            </nav>
                        </header>

                        <footer id="footer">
                            <span className="copyright">&copy; Untitled. Design: <a
                                href="http://html5up.net">HTML5 UP</a>.</span>
                        </footer>

                    </div>
                </div>

            </div>
        );
    }


} export default main