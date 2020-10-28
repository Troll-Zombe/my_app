import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                <h2>저는요...</h2>
                <h3>나이 : 15</h3>
                <h3>직업 : 학생</h3>
                <h3>하는 일 : 공부</h3>
                <h3>취미 : 스마트폰 만지작</h3>
                <h3>생일 : 2006 09 14</h3>
                <h4>...인 평범한 학생이에요.</h4>
                <h5>  </h5>
            </span>
            
            <span><h5>※이 앱은 Soyo에서 제작을 지원합니다. ^^7※</h5></span>
        </div>
    )
}

export default About;