  export default async (req, res) => {

    const activity_url = `https://www.strava.com/api/v3/athlete/activities?access_token=15308b4536e105543710304babd72e2d5d1fb147&`;
    const response = await fetch(activity_url);
    const json = await response.json();
 
    const { start_date, distance } = await json[1];

    return res.json({
      start_date,
      distance
    })

  }



