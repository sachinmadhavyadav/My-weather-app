const apiKey = "334757d888ff48b2165bba829ddb5d3e"; // Put your key inside the quotes
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
            document.getElementById("city").innerText = data.name;
            document.getElementById("desc").innerText = data.weather[0].description;
        })
        .catch(err => alert("City not found!"));
});
  

  
