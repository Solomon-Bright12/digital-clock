const date = new Date();
let display = document.getElementById('digital-clock');
function timer() {
    display.innerHTML = `<h2 class="date">${date.toDateString()}</h2>
<p class="time">
${date.toLocaleTimeString()}
</p>`
}
setInterval(timer(), 1000);



