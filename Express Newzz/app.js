var input = document.querySelector('.inputla');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button-30');
// var wind_speed=document.querySelector('.wind');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=





INPUT YOUR API HERE






=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var cloudsValue = data['clouds']['all'];
  // var windValue=data['wind_speed'];


  

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  clouds.innerHTML = "clouds - "+cloudsValue;
  // wind_speed.innerHTML="wind - "+windValue;




  

  input.value ="";

})


})
