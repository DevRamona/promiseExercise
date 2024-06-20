// // async function getCountryWeather(countryName) {
// //     const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
// //     const weatherUrl = 'https://api.open-meteo.com/v1/forecast';
  
// //     try {
// //       // Fetch country details
// //       const response = await fetch(countryUrl);
// //       if (!response.ok) {
// //         throw new Error(`Failed to fetch country data: ${response.status}`);
// //       }
// //       const countryData = await response.json();
  
// //       // Extract capital city and coordinates
// //       const capital = countryData[0].capital; // Assuming single country match
// //       const latitude = countryData[0].latlng[0];
// //       const longitude = countryData[0].latlng[1];
  
// //       // Build weather API URL with coordinates
// //       const weatherApiUrl = `${weatherUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  
// //       // Fetch weather data
// //       const weatherResponse = await fetch(weatherApiUrl);
// //       if (!weatherResponse.ok) {
// //         throw new Error(`Failed to fetch weather data: ${weatherResponse.status}`);
// //       }
// //       const weatherData = await weatherResponse.json();
  
// //       // Extract current temperature
// //       const currentTemp = weatherData.current_weather.temperature;
  
// //       // Display results in console
// //       console.log(`Country: ${countryName}`);
// //       console.log(`Capital: ${capital}`);
// //       console.log(`Current Temperature: ${currentTemp}°C`);
// //     } catch (error) {
// //       console.error("Error:", error.message);
// //     }
// //   }
  
// //   // Example usage
// //   getCountryWeather("France");
  

// function myFetch(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//     xhr.open("GET",url );
//     xhr.onload = function() {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             resolve(xhr.responseText)
//         } else {
//             reject(new Error(`Request failed with status: ${xhr.status}`))
//         }

//     };
//     xhr.onerror = function() {
//         reject(new Error("Network error"))
//     }
//     xhr.send()

//     })
    
// }

// myFetch('https://my-random-api.com/data')
// .then(data => console.log(data))
// .catch(error => console.log('Error:', error))


function myFetch(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
  
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText); 
        } else {
          reject(new Error(`Request failed with status: ${xhr.status}`)); 
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network error"));
      };
  
      xhr.send();
    });
  }
  
  
  myFetch('https://my-random-api.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  