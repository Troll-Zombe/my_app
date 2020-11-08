
import React from 'react'
import './fav.css'

function fav(fav) {
    console.log(fav);
    return (
        <div className="fav">
            
            
            <div className="soyo">
                <span className="soyo-logo"><img  src = "https://datacdn.soyo.or.kr/wcont/uploads/2016/02/19155900/Main_Logo1.png"/></span>
                <span className="soyo-about"><h1><a href="https://www.soyo.or.kr/">SOYO</a></h1> 
                <h4>디지털시대의 교육 공동체, 협동조합 소요</h4></span>
            </div>
            <div className="nomad_coder">
                <span className="nc-logo"><img  src = "https://nomadcoders.co/m.svg"/><h1 className="nc-title"><a href="https://nomadcoders.co/">Nomad Coder</a></h1></span>
                <span className="nc-about"><h4 className="nc-about">인싸유튜버 노마드코더의 웹사이트</h4></span>
                
            </div>
            
        </div>
    )
}




export default fav