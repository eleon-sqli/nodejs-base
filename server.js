import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
