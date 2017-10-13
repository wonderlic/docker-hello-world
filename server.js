const http = require('http');

const port = process.env.PORT || '8080';

const app = new http.Server();

app.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end('\n');
});

app.listen(port, () => {
  console.log(`hello-world is listening on port ${port}`);
});
