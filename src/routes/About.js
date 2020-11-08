import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            
            <span>
            <img className="me" src="https://png2.cleanpng.com/sh/05d58ba13688fd47ee24d403f3907b3e/L0KzQYq3VsE0N5pugpH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgBweqVmet5uLX7ohMj2kvsub6NmiNpyY4OwhrbqlP9zNZh3ReJucoPyfn72lgRtcZ9qReZ7YX72gLL5hf51NZJyiJ95bnewc73wkPFzfF5ritduLUXnQIOCUshlOmE7eqMBLkm3Q4KCUMEyOWY7SKY9OUa6R4K6UsgveJ9s/kisspng-computer-icons-portable-network-graphics-vector-gr-person-outline-transparent-amp-png-clipart-free-5d02928d206b16.9431901115604496771328.png"/>
                <h2>저는요...</h2>
                <h3>나이 : 15</h3>
                <h3>직업 : 학생</h3>
                <h3>하는 일 : 공부</h3>
                <h3>취미 : 스마트폰 만지작</h3>
                <h3>생일 : 2006 09 14</h3>
                <h4>...인 평범한 학생이에요.</h4>
                <h5>  </h5>
            </span>
            <span className="apply"><h5>※이 앱은 Soyo에서 제작을 지원합니다. ^^7※</h5></span>
        </div>
    )   
}           
        
    

export default About;