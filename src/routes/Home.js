
import React from 'react'
import './Home.css'



function Home({ props }) {
    console.log(props);
    return (
        <div className="Home__container">
            
            <span>
                저의 홈페이지에 오신걸 환영합니다.
            </span>
            
        </div>
    );
}



export default Home 