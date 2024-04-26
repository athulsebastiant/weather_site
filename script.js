const apiKey = "a6925aa52a3644c683d7e16fdff9215c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");
const downArrow = document.querySelector(".down-arrow");

async function checkWeather(city) {



    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }

    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

downArrow.addEventListener("click", () => {
    if (document.querySelector(".row").style.display == "flex") {
        document.querySelector(".row").style.display = "none";
        document.querySelector(".down-arrow img").src = "images/more_options.png";
    }
    else {
        document.querySelector(".row").style.display = "flex";
        document.querySelector(".down-arrow img").src = "images/up.png";
    }
}
)


