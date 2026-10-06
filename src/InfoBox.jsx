
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({weatherInfo}){
    if (!weatherInfo) {
        return null;
    }
    let INIT_URL ="https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D"
    let HOT_URL ="https://images.unsplash.com/photo-1604949210966-9440c324823f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D"
    let COLD_URL ="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let RAINY_URL ="https://media.istockphoto.com/id/688949080/photo/rain-drops-falling-from-a-black-umbrella.jpg?s=612x612&w=0&k=20&c=YlW7EfquiQZEk_gwD-HFMxz2KG1Peq4ruddVTsjFKBc="
    let info = {
    cityName: weatherInfo.cityName,
    weather: weatherInfo.weather,
    feelslike: weatherInfo.feelslike,
    humidity: weatherInfo.humidity,
    pressure: weatherInfo.pressure,
    temp: weatherInfo.temp,
    tempMax: weatherInfo.tempMax,
    tempMin: weatherInfo.tempMin,
}

    return (<div className="InfoBox" >
        <div className='card-container' > 
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 30 ? HOT_URL : info.temp < 10 ? COLD_URL : INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.cityName}&nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 30 ? <SunnyIcon/> : info.temp < 10 ? <AcUnitIcon/> : null}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Tempearture : {info.temp}&deg;C</div>
          <div>Humidity: {info.humidity}</div>
          <div>Min Temp: {info.tempMin}&deg;C</div>
          <div>Max Temp: {info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{ info.weather}</i> and feels_like: {info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>);
}