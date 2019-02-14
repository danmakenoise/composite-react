import express from 'express';

const server = express();

server.get('/', (req, res) => res.send('Hello World!'));

server.listen(3000, () => console.log('Composite running on localhost:3000'));
