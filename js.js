var APIKey = "39917b8751e22f39e00c3ac24944b412"
var local
var lati
var long
var date
var queryURL0
var date1=date+1
var date2=date+2 
var date3=date+3
var date4=date+4
var date5=date+5
var city5
var city4
var city3
var city2
var city1

var temp0
var wind0
var cloud0
var uVIndex
var humidity0
var tempPlus1
var windSpeedPlus1
var cloudinessPlus1
var uVIndexPlus1
var humidityPlus1
var tempPlus2
var windSpeedPlus2
var cloudinessPlus2
var uVIndexPlus2
var humidityPlus2
var tempPlus3
var windSpeedPlus3
var cloudinessPlus3
var uVIndexPlus3
var humidityPlus3
var tempPlus4
var windSpeedPlus4
var cloudinessPlus4
var uVIndexPlus4
var humidityPlus4
var tempPlus5
var windSpeedPlus5
var cloudinessPlus5
var uVIndexPlus5
var humidityPlus5
var city
var searchBar=document.getElementById("local")
var searchButton=document.getElementById("citySearch")
searchButton.addEventListener("click",weatherStuffPrime)
city1.addEventListener("click",weatherStuff)
city2.addEventListener("click",weatherStuff)
city3.addEventListener("click",weatherStuff)
city4.addEventListener("click",weatherStuff)
city5.addEventListener("click",weatherStuff)



function weatherStuffPrime(){
    local=searchBar.value
    city = "http://api.openweathermap.org/geo/1.0/direct?q="+local +",840&appid=39917b8751e22f39e00c3ac24944b412"
    weatherStuff()}
function weatherStuff(
){
fetch(city) 
.then (
    (res)=>{
        console.log(res.body)
return res.json()}
)
.then(
    (data)=>
    {console.log(data)
if (!lati) 
{lati = data[0].lat}
if (!long){
long = data[0].lon}
console.log(long)
console.log(lati)
return [lati,long]

//queryURL0 =  "https://api.openweathermap.org/data/2.5/onecall?lat=" +lati +"&lon=" +long +"&appid="+APIKey
}
)
.then (
    (res)=>{
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" +lati +"&lon=" +long +"&exclude=minutely,hourly&units=imperial&appid=" +APIKey )
.then(
    (res)=>{console.log(res.body)   
  return res.json()
}) 
.then((data)=>{console.log(data.daily[0])
temp0 = data.current.temp 
cloud0=data.current.clouds
humidity0=data.current.humidity
wind0=data.current.wind_speed
uVIndex=data.current.uvi
tempPlus1=data.daily[1].temp.max
windSpeedPlus1=data.daily[1].wind_speed
cloudinessPlus1=data.daily[1].clouds
uVIndexPlus1=data.daily[1].uvi
humidityPlus1=data.daily[1].humidity
tempPlus2data.daily[2].temp.max
windSpeedPlus2=data.daily[2].wind_speed
cloudinessPlus2=data.daily[2].clouds
uVIndexPlus2=data.daily[2].uvi
humidityPlus2=data.daily[2].humidity
tempPlus3= data.daily[3].temp.max
windSpeedPlus3=data.daily[3].wind_speed
cloudinessPlus3=data.daily[3].clouds
uVIndexPlus3=data.daily[3].uvi
humidityPlus3=data.daily[3].humidity
tempPlus4=data.daily[4].temp.max
windSpeedPlus4=data.daily[4].wind_speed
cloudinessPlus4=data.daily[4].clouds
uVIndexPlus4=data.daily[4].uvi
humidityPlus4=data.daily[4].humidity
tempPlus5=data.daily[5].temp.max
windSpeedPlus5=data.daily[5].wind_speed
cloudinessPlus5=data.daily[5].clouds
uVIndexPlus5=data.daily[5].uvi
humidityPlus5=data.daily[5].humidity
return data.current})

.then(
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lati +"&lon="+long +"&appid="+APIKey)
    .then((res)=>{ 
       
        return res.body.json()})
      .then((data)=>{console.log(data)
      })
    .catch((err)=>{}))
.catch((err)=>{})})
.catch((err)=>{})}
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}



//https://api.openweathermap.org/data/2.5/forecast/daily?lat=41.1035786&lon=-80.6520161&cnt=5&units=imperial&appid=39917b8751e22f39e00c3ac24944b412