

function timer(){
    let date = new Date();

let display = document.getElementById("digital-clock")
    display.innerHTML = `
    <h2 id="date">${date.toDateString()}</h2>
    <p id="time">${date.toLocaleTimeString()}</p>`
    
}
setInterval(timer, 100);
