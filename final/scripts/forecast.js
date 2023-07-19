const foreTemp = document.querySelector('#temp');


// today needs all, forecast only needs temp

const api = 'api.openweathermap.org/data/2.5/forecast?units=imperial&lang=en&lat=33.15&lon=117.35&appid=c84d2a464c67348bbb1e442a71fe1a58';

async function foreFetch() {
    try {
      const response = await fetch(api);
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

  foreFetch();

