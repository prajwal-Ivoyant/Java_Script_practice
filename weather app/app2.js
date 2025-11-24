import dotenv from "dotenv";
dotenv.config();

const OW_API_KEY = process.env.API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getWeather(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OW_API_KEY}&units=metric`;


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

        const query = `3 lines summaary of City: ${data.name}
        Temperature: ${data.main.temp} degree C
        Condition: ${data.weather[0].description}
        Humidity: ${data.main.humidity}% `;

        sendQuery(query);

    } catch (error) {
        console.log("error:", error.message);
    }
}

async function sendQuery(query) {

    const ai = `https://generativelanguage.googleapis.com/v1beta/openai/chat/completions`;

    try {
        const response = await fetch(ai, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GEMINI_API_KEY}` 
            },
            body: JSON.stringify({
                model: "gemini-2.5-flash",
                messages: [
                    { role: "user", content: query }
                ]
            })
        });

        const data = await response.json();
        
        //console.log(data)
        //console.log(data.choices[0].message)

        const summary = data.choices[0].message.content;
        
        console.log(summary);
        

    } catch(error) {
        console.error("error:", error.message);
    }
}


getWeather("bengaluru");
