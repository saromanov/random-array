# random-array
Generating  array of random numbers

# Install
``` npm install random-array ```

# Usage
```javascript
var random = require('random-array')
//Generate array of size 10 between 1 and 10
random(1,10).oned(10)
//Generate array of width 3 and height 2 between 1 and 10
random(1,10).twod(3,2)
//Generate array of size 10 and rounded numbers between 1 and 10
random(1,10).oned(10, {round: true});
```

# License
MIT
