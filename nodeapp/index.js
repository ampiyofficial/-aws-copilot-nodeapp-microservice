const express = require("express");
const app = express();
const port = process.env.APP_SERVICE_PORT || 10000;

const clientIp = Object.values(require("os").networkInterfaces())
.flat()
.filter((item) => !item.internal && item.family === "IPv4")
.find(Boolean).address;

app.get("/", (req, res) => {
    res.json({ msg: "Hi From Nodeapp", server: clientIp });
});

server = app.listen(port, () => {
    console.log("Server is running at port: ", port);
    });
    
module.exports = app;