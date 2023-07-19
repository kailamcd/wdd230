const temp = document.querySelector('#temp');
// const weatherIcon = document.querySelector('#weather-icon');
const condition = document.querySelector('#conditions');
const humidity = document.querySelector('#humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=92008&units=imperial&lang=en&appid=c84d2a464c67348bbb1e442a71fe1a58';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }

  }

  apiFetch();





  function displayResults(weatherData) {
    temp.innerHTML = `<h2><strong>${weatherData.main.temp.toFixed(0)}&deg F</strong></h2>`
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity.toFixed(0)}%`

    const desc = weatherData.weather[0].description;



    condition.textContent = desc;


  }