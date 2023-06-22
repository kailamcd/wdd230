//API call




temp = document.querySelector(".temp-title");
temperature = 33;
t = 5;
s = 3;
document.querySelector("#wind-speed").textContent = s;
temp.textContent = `${temperature} F`;
windchill = (35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));

if (temperature <= 50 && s >= 3) {
    windchill = Math.round(windchill);
} else {
    windchill = `Windchill: N/A`;
}



chill = document.querySelector(".chill");
chill.textContent = `Windchill: ${windchill}`;