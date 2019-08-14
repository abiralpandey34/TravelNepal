function clock() {
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = times(hours) + ":" + times(minutes) + ":" + times(seconds);
  
  function times(temp) {
    if (temp < 10) {
      temp = '0' + temp
    }
    return temp;
  }
}
setInterval(clock, 1000);