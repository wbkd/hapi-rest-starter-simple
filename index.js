var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 1337, host: 'localhost' });

var dogwaterOptions = {
  connections: {
    pizzaDB : {
      adapter: 'pizzaDisk'
    }
  },
  adapters:{
     pizzaDisk : 'sails-disk'
  },
  models: [require('./models/pizza')]
};

server.register([{
    register : require('blipp')
  },{
    register: require('dogwater'),
    options: dogwaterOptions
  },{
    register: require('bedwetter'),
    options: {} 
  }
], function (err) {
    if (err) { return console.log(err); }

    server.route(require('./routes/pizza'));

    server.start(function () {
      console.log('Pizza API up and running at:', server.info.uri);
    });
});

