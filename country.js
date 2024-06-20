async function getCountry(countryName) {
    try{
        
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        return data;

    }catch(error) {
        console.log(error)
    }

}



 async function getWeather() {
    const result = await getCountry("France");
    const fetchWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`);
    const data2 = await fetchWeather.json();
    const lati = result[0].latlng[0]
    const longi = result[0].latlng[1]
    console.log(longi)


}
getWeather();