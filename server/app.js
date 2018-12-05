// const express = require('express');
// const path = require('path');
// const http = require('http');

// const app = express();

// // Point static path to dist
// app.use('/', express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
// });

// /** Get port from environment and store in Express. */
// const port = process.env.PORT || '8000';
// app.set('port', port);

// /** Create HTTP server. */
// const server = http.createServer(app);
// /** Listen on provided port, on all network interfaces. */
// server.listen(port, () => console.log(`Server Running on port ${port}`));
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, '../build')));

// send the user to index html page inspite of the url
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log('server started!');
});
