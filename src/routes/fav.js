
import React from 'react'
import './fav.css'
import logo from './Main_Logo.png';

function fav(fav) {
    console.log(fav);
    return (
        <div className="fav">
            
            
            <div className="soyo">
                <span><img  src = {logo}/></span>
                <span><h1><a href="https://www.soyo.or.kr/">협동조합 소요</a></h1> 
                <h4>↳디지털시대의 교육 공동체, 협동조합 소요</h4></span>
            </div>
            <div className="nomad_coder">
                <span><img  src = "https://nomadcoders.co/m.svg"/></span>
                <span><h1><a href="https://nomadcoders.co/">노마드코더</a></h1>
                <h4>↳인싸유튜버 노마드코더의 웹사이트</h4></span>
            </div>
            
        </div>
    )
}




export default fav