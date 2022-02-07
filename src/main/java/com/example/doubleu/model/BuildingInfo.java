package com.example.doubleu.model;

public class BuildingInfo {
    private Integer buildingSeq = 0;
    private String buildingName = "";
    private String bfEntranceYn = "";
    private String elevator = "";
    private String covidClosure = "";

    public Integer getBuildingSeq() {
        return buildingSeq;
    }

    public void setBuildingSeq(Integer buildingSeq) {
        this.buildingSeq = buildingSeq;
    }

    public String getBuildingName() {
        return buildingName;
    }

    public void setBuildingName(String buildingName) {
        this.buildingName = buildingName;
    }

    public String getbfEntranceYn() {
        return bfEntranceYn;
    }

    public void setbfEntranceYn(String bfEntranceYn) {
        this.bfEntranceYn = bfEntranceYn;
    }

    public String getElevator() {
        return elevator;
    }

    public void setElevator(String elevator) {
        this.elevator = elevator;
    }

    public String getCovidClosure() {
        return covidClosure;
    }

    public void setCovidClosure(String covidClosure) {
        this.covidClosure = covidClosure;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    private String result = "";


}
