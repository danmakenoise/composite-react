import express from 'express';

const server = express();

server.use(express.static('public'));

server.listen(3000, () => console.log('Composite running on localhost:3000'));
