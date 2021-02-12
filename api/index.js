var express = require("express");

var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

function nFibonacci(n) {
    if(n < 2) {
        return n;
    }
    return (nFibonacci(n - 1) + nFibonacci(n - 2));
  }

  
app.get("/", (req, res, next) => {
  res.send('Enter an index as a parameter and you will recieve your fibonacci! Any client app that sends an index as a parameter will recieve as a response its corresponding fibonacci :)')
});

app.get("/:index", (req, res, next) => {
        res.json(nFibonacci(req.params.index))
});