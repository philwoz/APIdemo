
import React from 'react';
import './App.css';
import axios from "axios";


require("dotenv").config();

function App() {
  const [data, setData] = React.useState(null);
  // const [leagues, setLeagues] = React.useState(4);

  React.useEffect(() => {
    const getFixtures = () => {
      const config = {
        method: 'get',
        url: 'https://v3.football.api-sports.io/status',
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      axios(config)
        .then(function (response) {
          let a = JSON.stringify(response.data.response);
          // console.log(JSON.stringify(response.data));
          // console.log(response.data.response)
          setData(a)
          console.log(data)
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }
    getFixtures();
  });


  return (
    <div>{data ? [data].map((item) => {
      return <h1>{item}</h1>
    }) : <h1>null</h1>}</div>
  )


}


export default App;
