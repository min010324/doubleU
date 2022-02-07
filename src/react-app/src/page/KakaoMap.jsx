import React from 'react'
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ApartmentIcon from '@material-ui/icons/Apartment';
import jungkyeongsimplemap from "./assets/css/images/jungkyeongsimplemap.png"

class KakaoMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            infowindow: {},
            map: {},
            customOverlay: {},
            simpleMapModalOpen: false,
            searchTypeModalOpen: false,
            buildingName: "",
            lectureName: "",
            professorName: "",
            searchType: 2,
        }
    }

    componentDidMount() {
        let container = document.getElementById('map');
        const kakao = window.kakao;
        let options = {
            center: new kakao.maps.LatLng(37.590372, 127.035914),
            level: 3
        };

        let map = new kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(37.590372, 127.035914);
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // marker.setMap(map);

        this.setState({
            infowindow: new kakao.maps.InfoWindow({zIndex: 1}),
            map: map,
            customOverlay: {},
            simpleMapModalOpen: false,
        })
    }

    handleGetBuildingInfo = () => {

        axios.get("/kakao/select_building_info").then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })


    }

    //뒤로 가기 버튼 구현
    handleGoBack = () => {
        window.location.href = "http://localhost:3000/";
    }
    placesSearchCB = (data, status, pagination) => {
        const kakao = window.kakao;
        const {map} = this.state;
        if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i = 0; i < data.length; i++) {
                this.displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);

            this.setState({
                map: map,

            })
        }
    }

    displayMarker = (place) => {
        const kakao = window.kakao;
        const {infowindow, map} = this.state;
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', () => this.handleShowSimpleMap());
    }

    handleCloseOverlay = () => {
        const {customOverlay} = this.state;
        customOverlay.setMap(null);
    }

    handleShowSimpleMap = () => {
        this.setState({
            simpleMapModalOpen: true,
        })
    }


    handleSearch = () => {
        const {searchType} = this.state;
        const kakao = window.kakao;
        let keyword = document.getElementById("input-with-icon-grid").value;
        //현재 jdbctemplate으로 db에서 값을 가져오는 부분에 에러가 있어서 작동하지 않음
        if(searchType !== 2){
            axios.get(`/kakao/select_building_info?keyword=${keyword}&searchType=${searchType}`).then(res => {
                keyword = res;
            }).catch(err => {

                console.log(err);
            })
        }
        console.log(keyword)
        var ps = new kakao.maps.services.Places();

        ps.keywordSearch(keyword, this.placesSearchCB);


    }

    handleCloseModal = () => {
        this.setState({
            simpleMapModalOpen: false,
        })
    }

    handleShowSearchType = () => {
        this.setState({
            searchTypeModalOpen: true,
        })
    }
    handleCloseSearchTypeModal = () => {
        this.setState({
            searchTypeModalOpen: false,
        })
    }

    handleSearchTypeChange = (idx)  =>{
        this.setState({
            searchType: idx,
            searchTypeModalOpen: false,
        })
    }


    render() {

        const {simpleMapModalOpen, searchTypeModalOpen, buildingName, lectureName, professorName} = this.state;

        return (
            <div>
                <main>
                    <div style={{overflow: "hidden"}}>
                        <div>
                            <div style={{
                                width: "100%",
                                height: "50px",
                                backgroundColor: "skyblue",
                                display: "flex",
                                alignItems: "center"
                            }}>

                                <ArrowBackIcon style={{marginLeft: "10px", float: "left"}}
                                               onClick={this.handleGoBack}> </ArrowBackIcon>
                                <SearchIcon onClick={this.handleSearch}
                                            style={{marginRight: "10px", marginLeft: "85px", float: "right"}}/>
                                <div style={{float: "right", alignItems: "center"}}>
                                    <TextField id="input-with-icon-grid" label="Search Keyword"
                                               style={{float: "right"}}/>
                                </div>
                                <ReorderIcon style={{float: "right"}} onClick={this.handleShowSearchType}/>
                            </div>
                            <div id="map" style={{height: "1000px", width: "1000px", border: "black"}}>
                            </div>
                        </div>
                        <Dialog
                            open={simpleMapModalOpen}
                            onClose={this.handleCloseModal}l
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">{"정경관"}</DialogTitle>
                            <DialogContent>
                                <div style={{width: "300px", height: "150px"}}>
                                    <img style={{width: "100%", height: "100%"}} src={jungkyeongsimplemap}/>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCloseModal} color="primary">
                                    닫기
                                </Button>
                                {/*<Button onClick={handleClose} color="primary" autoFocus>*/}
                                {/*    Agree*/}
                                {/*</Button>*/}
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={searchTypeModalOpen}
                            onClose={this.handleCloseSearchTypeModal}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">{"검색 필터"}</DialogTitle>
                            <DialogContent>
                                <div style={{textAlign:"center", alignItems:"center"}} >
                                    <div style={{height:"40px", alignItems:"center", display:"flex"}} onClick={() => this.handleSearchTypeChange(0)}>
                                        <PersonIcon/>
                                        <span style={{height:"40px", lineHeight:"40px"}}>교수명</span>
                                    </div>
                                    <div style={{height:"40px", alignItems:"center", display:"flex"}} onClick={() => this.handleSearchTypeChange(1)}>
                                        <MenuBookIcon/>
                                        <span style={{height:"40px", lineHeight:"40px"}}>강의명</span>
                                    </div>

                                    <div style={{height:"40px", alignItems:"center", display:"flex"}} onClick={() => this.handleSearchTypeChange(2)}>
                                        <ApartmentIcon/>
                                        <span style={{height:"40px", lineHeight:"40px"}}>건물명</span>
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCloseSearchTypeModal} color="primary">
                                    닫기
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </div>
                </main>
            </div>
        )

    }
}

export default KakaoMap;

