const apikey= "bfe4e63ac18d668a01fc0063a211e886"
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const inputvalue=document.querySelector('.search input')
const search=document.querySelector('.search button img')
const temp=document.querySelector('.temp')
const city=document.querySelector('.city')
const icon=document.querySelector('.weathericon')
const humidity=document.querySelector('.humidity')
const wind=document.querySelector('.wind')


console.log(humidity )
console.log(wind )



async function checkweather(area){
const response= await fetch(url+ area + `&appid=${apikey}`)
const result= await response.json();

console.log(result)
city.innerHTML=result.name
temp.innerHTML=Math.round(result.main.temp)+ '°C'
humidity.innerHTML=result.main.humidity+'%'
wind.innerHTML=result.wind.speed+' km/hr'

if(result.weather[0].main=='Clouds'){
    icon.src='images/clouds.png'
}
if(result.weather[0].main=='clear'){
    icon.src='images/clear.png'
}
if(result.weather[0].main=='drizzle'){
    icon.src='images/drizzle.png'
}
if(result.weather[0].main=='mist'){
    icon.src='images/mist.png'
}
if(result.weather[0].main=='rain'){
    icon.src='images/rain.png'
}
if(result.weather[0].main=='snow'){
    icon.src='images/snow.png'
}


    
}

 search.addEventListener('click',()=>{
    const place=inputvalue.value
   document.querySelector('.weather').style.display='block'
    
checkweather(place)    
 })


   




