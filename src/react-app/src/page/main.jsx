import React from "react";
import './assets/css/main.css'
import MapIcon from '@material-ui/icons/Map';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import KakaoMap from "./KakaoMap";
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
                                <ul style={{alignItems:"center"}}>
                                    {/*<li><a href="#" className="icon brands fa-twitter"><span*/}
                                    {/*    className="label">Twitter</span></a></li>*/}
                                    {/*<li><a href="#" className="icon brands fa-facebook-f"><span*/}
                                    {/*    className="label">Facebook</span></a></li>*/}
                                    {/*<li><a href="KakaoMap" className="icon brands fa-dribbble"><span*/}
                                    {/*    className="label">Dribbble</span></a></li>*/}
                                    {/*<li><a href="#" className="icon brands fa-github"><span*/}
                                    {/*    className="label">Github</span></a></li>*/}
                                    {/*<li><a href="#" className="icon solid fa-envelope"><span*/}
                                    {/*    className="label">Email</span></a></li>*/}
                                    <li><a href = "KakaoMap" style={{borderRadius:"100%", border:"solid 1px #fff", display:"block", height:"50px", lineHeight:"60px", position:"relative", textAlign:"center", top:"0", width:"50px", alignItems:"center", verticalAlign:"middle"}}> <MapIcon/> </a></li>
                                    <li><a href = "https://kucsd.korea.ac.kr/kucsd/facilities/audio_guide.do" style={{borderRadius:"100%", border:"solid 1px #fff", display:"block", height:"50px", lineHeight:"60px", position:"relative", textAlign:"center", top:"0", width:"50px", alignItems:"center", verticalAlign:"middle"}}> <RecordVoiceOverIcon/> </a></li>
                                    <li><a href = "http://pf.kakao.com/_xgexgxes" style={{borderRadius:"100%", border:"solid 1px #fff", display:"block", height:"50px", lineHeight:"60px", position:"relative", textAlign:"center", top:"0", width:"50px", alignItems:"center", verticalAlign:"middle"}}> <ContactSupportIcon/> </a></li>
                                    {/*<li><MapIcon style={{borderRadius:"100%", border:"solid 1px #fff", display:"block", height:"2.5em", lineHeight:"2.5em", position:"relative", textAlign:"center", top:"0", width:"2.5em"}}/></li>*/}
                                    {/*<li><RecordVoiceOverIcon style={{borderRadius:"100%", border:"solid 1px #fff", display:"block", height:"2.5em", lineHeight:"2.5em", position:"relative", textAlign:"center", top:"0", width:"2.5em"}}/></li>*/}
                                    {/*<li><ContactSupportIcon style={{borderRadius:"100%", border:"solid 1px #fff", display:"block", height:"2.5em", lineHeight:"2.5em", position:"relative", textAlign:"center", top:"0", width:"2.5em"}}/></li>*/}
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