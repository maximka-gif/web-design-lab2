document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    const apiKey = "750dbde73f2a6f75a403378560fd94aa";  
    
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          const weather = document.getElementById("weather");
          if (data.cod === 200) {
            weather.innerHTML = `
              <p>Temperature: ${data.main.temp}°C</p>
              <p>Weather: ${data.weather[0].description}</p>
            `;
          } else {
            weather.innerHTML = `<p>City not found.</p>`;
          }
        })
        .catch(error => {
          document.getElementById("weather").innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }
  });
  