
import React from 'react'
import './Home.css'
import './logo.png'


function Home({ props, picture }) {
    console.log(props);
    return (
        <div className="Home__container">
            <span>
                환영합니다.
            </span>
            <span>
                my_app입니다.
            </span>
            <img width = '275px' height = '275px' src = 'https://www.flaticon.com/svg/static/icons/svg/2/2144.svg' />
        </div>
    );
}



export default Home 