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
# Some key clarifications
`line 2`: The value of `counter` is being incremented by one because by the time `setInterval()` triggers, the value of `counter` will already have been decremented (by one). If you want to start a countdown from 30, let's say, and pass 30 to `timer()`, the first number that will be displayed is going to be 29, so while the counter technically started at 30, the impression will be given that it started at 29, or a value less from where you actually wanted it to start. Instead of having to think "ok I want this timer to start counting down at 30 so I'll pass it 31", that's just taken care of inside the function, so the programmer doesn't have to worry about that or potentially make mistakes.

`line 3`: The `setInterval()` method is getting assigned to a variable because in order to stop it, we need to be able to reference it somehow. We can't just tell the program "hey, by the way, `clearInterval()`"; it won't know which interval to stop. `clearInterval()` actually takes an argument. In this case, the variable or the reference `interval`, to which our `setInterval()` method is tied.

`lines 5-8`: Within our `setInterval()` method which, in this case runs every one second because it's supposed to behave like a timer, we continually check, every other second, whether the value of counter has already gone below `0`. If it hasn't we keep decrementing, but if it has gone below `0`, then we exit the `setInterval()` method by using the `return` keyword so that the `console.log()` on line `9` doesn't get executed. If we didn't add the `return` statement on line `7`, the interval would clear, but line `9` would still execute... so if a timer starts at `5`, instead of displaying `5, 4, 3, 2, 1, 0`, it would print `5, 4, 3, 2, 1, 0, -1`. In essence, by breaking out of the `setInterval()` method after the value of `count` has gone below `0`, we ensure that `-1` doesn't get printed to the console.
