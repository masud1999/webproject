const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');


const getInfo= async(event) =>{
    event.preventDefault();
   let cityVal = cityName.value;
 if(cityVal === ""){
  city_name.innerText = `plz write the name before search`;
    }
    else{ 
      try{
        let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f55064369cc02241311ed68428daecf `;
        const response = await fetch(url);
        const data = await response.json();
        const arrayData =[data];
         
        temp.innerText = arrayData[0].main.temp; 
        temp_status.innerText = arrayData[0].weather[0].main;

         }catch{
          city_name.innerText = `plz enter the city name properly`;
        }
     
      }
    
}

submitBtn.addEventListener('click',getInfo);








