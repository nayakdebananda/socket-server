const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})

io.on("connection", socket => {
  console.log("socket is active")
  socket.on("chat", payload => {
    console.log("what is payload", payload)
    io.emit("chat", payload)
  })
})

server.listen(5000, () => {
  console.log("listening on *:5000")
})
