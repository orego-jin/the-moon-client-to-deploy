import { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Album from './components/Album';
import Status from './components/Status';
import Records from './components/Records';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { main } from './styles/Themes';

require('dotenv').config();

function dateFormatter(date) {
  const rawDate = new Date(date);
  let dd = rawDate.getDate();
  let mm = rawDate.getMonth() + 1;
  let yyyy = rawDate.getFullYear();

  if(dd<10) {
    dd = '0' + dd;
  }
  if(mm < 10) {
    mm = '0' + mm;
  }

  const formattedDate = yyyy + '/' + mm + '/' + dd;
  return formattedDate; 
}

function sumCalculator( data ) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].distance;
  }
  return sum;
}


function App() {

  const [stravaData, setStravaData] = useState(null);
  const [totalDistance, setTotalDistance] = useState(null);
  const [selectedSlide, setSelectedSlide] = useState(null);

  console.log('initial data',stravaData)
  console.log('initial data',totalDistance)

  useEffect(() => { 
    const auth_url = `https://www.strava.com/oauth/token`;

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;

    fetch(auth_url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        client_id: client_id, 
        client_secret: client_secret,
        refresh_token: refresh_token,
        grant_type: 'refresh_token'
      })
    })
    .then(res => res.json())
    .then(res => getActivities(res))
   
    function getActivities(res) {
      const activity_url = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}&`
      let result = [];
    
     fetch(activity_url) 
     .then (res => res.json())
     .then (res => {
       if (res.length > 0) {
         for(let i = 0; i< res.length; i++){
           let obj= {};
           obj.id = res.length -i;
           obj.distance = Number(((res[i].distance)/1000).toFixed(1));
           
           // obj.startDate = res[i].start_date;
           obj.startDate = dateFormatter(res[i].start_date);
           result.push(obj);
         }         
       }
       result.reverse();
      //  console.log('today, you ran: ', sumCalculator(result), result);
       return result;
     })
     .then((data) =>
       {
        console.log('received result',data);
        const sum = sumCalculator(data).toFixed(1);
        setStravaData(data);
        setTotalDistance(sum);
        // console.log(stravaData);
     })
    }

  }, [])
  

  return (
    < >
    <GlobalStyles />
      <ThemeProvider theme={main}>
        <Navigation />
        <Home setSelectedSlide={setSelectedSlide}/>
        <Album selectedSlide={selectedSlide}/>
        <Status totalDistance = {totalDistance}/>
        <Records stravaData = {stravaData}/>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
