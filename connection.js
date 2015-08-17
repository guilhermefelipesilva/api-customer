var mongoose = require('mongoose');

module.exports = {
    open: function(){
          mongoose.connect('mongodb://localhost/test');
          var db = mongoose.connection;
          db.on('error', console.error.bind(console, 'connection error:'));
          db.once('open', function (callback) {
            console.log("Conexão aberta!");
            return true;
          });
          return false;
    }
};
