const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `de3dea9a47659b19f3742af4bbbb0367`;
const diffKelvin = 273.15;
/*trim*/
document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  document.getElementById("responseData").innerHTML = "";
  fetchWeather(city);
});

document.getElementById("cityInput").addEventListener("keydown", function (e) {
  document.getElementById("responseData").innerHTML = "";
  if (e.code === "Enter") {
    const city = document.getElementById("cityInput").value.trim();
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then((data) => data.json())
    .then((data) => showWeatherData(data));
}

function showWeatherData(data) {
  const divResponseData = document.getElementById("responseData");
  if (data.cod == 404) {
    const alert = document.createElement("p");
    alert.textContent = `Ingrese una ciudad válida`;
    divResponseData.appendChild(alert);
  } else {
    divResponseData.innerHTML = "";

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement("h2");
    cityInfo.textContent = `${cityName}, ${countryName}`;

    const tempInfo = document.createElement("p");
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp - diffKelvin)}°C`;

    const imgTemp = document.createElement("img");
    imgTemp.src = `assets/icon/icons8-temperatura-48.png`;
    imgTemp.style.width = "30px";
    imgTemp.style.height = "30px";

    const humidityInfo = document.createElement("p");
    humidityInfo.textContent = `La humedad es del ${humidity}%`;

    const imgHumidity = document.createElement("img");
    imgHumidity.src = `assets/icon/icons8-humedad-64.png`;
    imgHumidity.style.width = "30px";
    imgHumidity.style.height = "30px";

    const icoInfo = document.createElement("img");
    if (description === "cielo claro") {
      icoInfo.src = `assets/icon/despejado.png`;
    }
    if (description === "nubes") {
      icoInfo.src = `assets/icon/nublado.png`;
    }
    if (description === "lluvia de gran intensidad") {
      icoInfo.src = `assets/icon/lluvia de gran intensidad.png`;
    }
    if (description === "muy nuboso") {
      icoInfo.src = `assets/icon/muy nublado.png`;
    }
    if (description === "ventoso") {
      icoInfo.src = `assets/icon/ventoso.png`;
    }
    if (description === "algo de nubes") {
      icoInfo.src = `assets/icon/seminublado.png`;
    }
    if (description === "nubes dispersas") {
      icoInfo.src = `assets/icon/nubes dispersas.png`;
    }
    if (description === "bruma") {
      icoInfo.src = `assets/icon/neblina.png`;
    }
    if (description === "lluvia moderada") {
      icoInfo.src = `assets/icon/lluvia moderada.png`;
    }
    if (description === "lluvia ligera") {
      icoInfo.src = `assets/icon/lluvia ligera.png`;
    }
    if (description === "llovizna ligera") {
      icoInfo.src = `assets/icon/chubasco de ligera intensidad.png`;
    }
    if (description === "chubasco de ligera intensidad") {
      icoInfo.src = `assets/icon/chubasco de ligera intensidad.png`;
    }
    if (description === "nieve") {
      icoInfo.src = `assets/icon/nieve.png`;
    }
    if (description === "nevada ligera") {
      icoInfo.src = `assets/icon/nieve.png`;
    }
    if (description === "chubasco") {
      icoInfo.src = `assets/icon/chubasco de ligera intensidad.png`;
    }
    if (description === "polvo") {
      icoInfo.src = `assets/icon/neblina.png`;
    } else {
    }

    const descriptionInfo = document.createElement("p");
    descriptionInfo.textContent = `La descripción meteorológica es ${description}`;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    tempInfo.appendChild(imgTemp);
    divResponseData.appendChild(humidityInfo);
    humidityInfo.appendChild(imgHumidity);
    divResponseData.appendChild(icoInfo);
    divResponseData.appendChild(descriptionInfo);
  }
}
