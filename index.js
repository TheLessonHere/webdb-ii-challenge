const server = require('./server.js');

const carsRouter = require('./routers/carsRouter');
server.use('/api/cars', carsRouter);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});