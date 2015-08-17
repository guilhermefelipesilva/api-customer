var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

module.exports = {
    var open = function(){
          var db = mongoose.connection;
          db.on('error', console.error.bind(console, 'connection error:'));
          db.once('open', function (callback) {
            console.log("Conexão aberta!");
            return true;    
          });
    }
};
