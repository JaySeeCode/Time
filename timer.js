function timer(counter) {
  counter++;
  let interval = setInterval(function() {
    counter--;
    if(counter < 0) {
      clearInterval(interval);
      return;
    }
    console.log(counter);
  }, 1000)
}