const http = require("http")

http
  .createServer((req, res) => {
    res.write("On the way to being a full stack engineer!")
    res.end()
  })
  .listen(3000)

console.log("Server starded on port 3000")

