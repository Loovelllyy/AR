const express = require('express');
const https = require( "https" );
const fs = require( "fs" );
const app = express();
const path = require('path');

httpsOptions = {
    key: fs.readFileSync("../server.key"),
    cert: fs.readFileSync("../server.crt")
}

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
})

https.createServer(httpsOptions, app).listen(8080, () => {
    console.log('Listening on https://localhost:8080');
});
// app.listen(8080, () => {
//     console.log('Listening on http://localhost:8080');
// })