const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://nwnyjdhnb4psrrxsvrp562ok2a0fubwo.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();