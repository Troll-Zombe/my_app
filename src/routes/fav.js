
import React from 'react'
import './fav.css'

function fav(fav) {
    console.log(fav);
    return (
        <div className="fav">
            <div className="about-this-page">
            <span><h4>즐겨찾기 페이지들 입니다.</h4></span>
            </div>
            <div className="none"></div>
            <div className="soyo">
                <span><img className="soyo-logo" src = "https://datacdn.soyo.or.kr/wcont/uploads/2016/02/19155900/Main_Logo1.png"/>
                <h1 className="soyo-title"><a href="https://www.soyo.or.kr/">SOYO</a></h1>
                <h3 className="soyo-about">이재퐁 사장님의 소요사이트!</h3></span>
            </div>
            <div className="nomad_coder">
                <span><img className="nc-logo" src = "https://nomadcoders.co/m.svg"/>
                <h1 className="nc-title"><a href="https://nomadcoders.co/">Nomad Coder</a></h1>
                <h3 className="nc-about">인싸유튜버 노마드코더의 사이트!</h3></span>
                
            </div>
            <div className="minecraft">
                <span><img className="mc-logo" src = "https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP"/>
                <h1 className="nc-title"><a href="https://www.minecraft.net/ko-kr">Minecraft</a></h1>
                <h3 className="nc-about">ms store 판매1위 마인크래프트!</h3></span>
                
            </div><div className="nomad_coder">
                <span><img className="nc-logo" src = "https://nomadcoders.co/m.svg"/>
                <h1 className="nc-title"><a href="https://nomadcoders.co/">Nomad Coder</a></h1>
                <h3 className="nc-about">인싸유튜버 노마드코더의 사이트!</h3></span>
                
            </div>
                
                
            
        </div>
    )
}




export default fav