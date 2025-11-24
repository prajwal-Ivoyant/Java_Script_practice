import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

async function getWeather(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    try {
        const response = await fetch(url);

        const data = await response.json();

        //console.log(data)

        console.log(`
        City: ${data.name}
        Temperature: ${data.main.temp} degree C
        Condition: ${data.weather[0].description}
        Humidity: ${data.main.humidity}%
        `);

    } catch (error) {
        console.log("error:", error.message);
    }
}