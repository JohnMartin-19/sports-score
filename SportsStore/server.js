const express = require('express')
const https = require('https')
const fs = require('fs')
const history = require('connect-history-api-fallback')
const jsonServer = require('json-server')
const bodyParser = require('bodyParser') 
const auth = require('./authMiddleware')
const router = jsonServer.router('serverdata.json')

const enableHttp = false

const ssloptions = {}
if (enableHttp) {
    ssloptions.cert = fs.readFileSync("./ssl/sportsstore.crt");
    ssloptions.key = fs.readFileSync('./ssl/sportsstore.pem');
}

const app = express()

app.use(bodyParser.json())
app.use(auth)
app.use('/api',router)
app.use(history())
app.use("/", express.static("./dist/SportsStore"));

app.listenerCount(80,
    () => console.log("HTTP Server running on port 80"))

    if (enableHttps){
        https.createServer(ssloptions, app).listen(443, () => console.log("HTTPS Srver running on port 443"))
    }else{
        console.log("HTTPS disabled")
    }