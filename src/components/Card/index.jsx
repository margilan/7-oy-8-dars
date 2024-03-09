import './index.css'
import { useState , useEffect } from 'react';
import img from '../../assets/carusel.png'
import iconss from '../../assets/four.svg'


function index() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const ApiKey = ' 3RZT9KG-6D14WCF-H3NJA5B-9QF9707';
  
      fetch('https://api.kinopoisk.dev/v1.4/movie?lists=top250', {
        headers: {
          "X-API-KEY": ApiKey,
        },
      })
        .then((res) => res.json())
        .then((responseData) => {
          setData(responseData.docs);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <div className="wraper-container">
        {data.map((movie) => (
          <div className="card-wrapper" key={movie.id}>
            <div className="img">
              <img src={img} width={280} height={174} alt="" />
            </div>
            <span className="obwe-span">
              <span className="iki">{movie.year}</span>
              <span className="icons">
                <span>
                  <img src={iconss} alt="icons" />
                </span>
                <span>Movie</span>
              </span>
              <span>{movie.ageRestriction}</span>
            </span>
          </div>
        ))}
      </div>
    );
  }
  
  export default index;