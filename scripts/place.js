document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("wind").textContent);
    const chillElement = document.getElementById("chill");

    const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

    if (temp <= 10 && windSpeed > 4.8) {
        const windChillFactor = calculateWindChill(temp, windSpeed);
        chillElement.textContent = `${windChillFactor.toFixed(1)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }
});