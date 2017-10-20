# Timer
Not an application, just resusable code for a simple timer.
```javascript
 1 |   function timer(counter) {
 2 |     counter++;
 3 |     let interval = setInterval(function() {
 4 |       counter--;
 5 |       if(counter < 0) {
 6 |         clearInterval(interval);
 7 |         return;
 8 |       }
 9 |       console.log(counter);
10 |     }, 1000);
11 |  }
```
