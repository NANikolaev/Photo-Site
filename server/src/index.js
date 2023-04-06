const server=require ("express")();
const PORT = process.env.PORT || 5000;

require('./configurations/mongoDB')();
require('./configurations/express')(server);
require('./middlewares/ifLogged')(server);
require('./configurations/routes')(server);
require('./services/errorHandler')(server);



server.listen(PORT,console.log(`Server is running on port ${PORT}`))