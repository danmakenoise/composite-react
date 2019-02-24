import express from 'express';
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname, '..', '..', 'public')));

server.listen(3000, () => console.log('Composite running on localhost:3000'));
