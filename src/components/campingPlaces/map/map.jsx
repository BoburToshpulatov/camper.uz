import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { campingPlaces } from "../mock/placesmock";

const KakaoMap = () => {
    let{id} = useParams();
    const dataById=campingPlaces.find((data)=>data.id===parseInt(id)); 

    const new_script = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.addEventListener("load", () => {
            resolve();
          });
          script.addEventListener("error", (e) => {
            reject(e);
          });
          document.head.appendChild(script);
        });
      };
    
      useEffect(() => {
        const my_script = new_script(
          "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5d0fec76f9a37adb6bcdced0e29b25dd"
        );
        my_script.then(() => {
          const kakao = window["kakao"];
          kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const options = {
              center: new kakao.maps.LatLng(dataById.place.latitude,dataById.place.longitude),
              level: 7,
            };
            const map = new kakao.maps.Map(mapContainer, options);
    
            const markerPositions = [new kakao.maps.LatLng(dataById.place.latitude,dataById.place.longitude)];
    
            markerPositions.forEach((position) => {
              const marker = new kakao.maps.Marker({
                position: position,
              });
              marker.setMap(map);
            });
          });
        });
      }, []);
  return (
    <Wrapper style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer>
<div id="map" className="map" />
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  margin: 50px 0;
  width: 100%;
  .map {
    flex: 1;
    height: 700px;
    /* width: 400px;
    height: 400px; */
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    height: 400px;
  }
  @media only screen and (max-width: 450px) {
    display: flex;
    height: 300px;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  height :500px ;
  h1{
    font-size: 28px;
  }
  .map {
    flex: 1;
    height: 500px;
    /* width: 400px;
    height: 400px; */
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    height: 400px;
    .map{
        height: 400px;
    }
    h1 {
      margin: 0;
      padding-bottom: 10px;
      font-size: 23px;
    }
  }
  @media only screen and (max-width: 450px) {
    height: 300px;
    .map{
        @media only screen and (max-width: 450px) {
    height: 300px;
  }
    }
  }
`;

export default KakaoMap;
