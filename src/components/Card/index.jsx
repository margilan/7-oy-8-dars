import "./index.css";
import { useState , useEffect } from "react";
import React from "react";
import img from "../../assets/carusel.png";
import iconss from "../../assets/four.svg";





function index() {

     const [data , setData] = useState([]);
    useEffect(()=>{
        const ApiKey = 'MS644MN-J7WMZQT-Q0PDD6K-FSV5ZAA';
    
        fetch('https://api.kinopoisk.dev/v1.4/movie?lists=top250' , {
            headers:{
                "X-API-KEY" : ApiKey,
            },
        })
        .then(res => res.json())
        .then(data=>{
            setData(data.docs)
        })
        .catch(err =>{
            console.log(err);
        })
    } , [])
  return (
    <div className="wraper-container">
    {
        data.map((el)=>{
            <div className="card-wrapper">
            <div className="img">
              <img src={img} width={280} height={174} alt="" />
            </div>
            <span className="obwe-span">
              <span className="iki">2019</span>
              <span className="icons">
                <span>
                  <img src={iconss} alt="icons" />
                </span>
                <span>{el.name}</span>
              </span>
              <span>PG</span>
            </span>
          </div>
        })
    }
      
    </div>
  );
}

export default index;
