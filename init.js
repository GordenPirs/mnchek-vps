var request = require('request');
var rpc = require('node-bitcoin-rpc')
require('dotenv').config()

function sendDate(data) {
  request.get({url:process.env.API, form: data }, function(err, res) {
    if(err) {
      console.log(err);
    } else {
      console.log(res.body);
    }
  });
};

function checkMasternode() {
  rpc.init(process.env.RPCHOST, process.env.RPCPORT, process.env.RPCUSER, process.env.RPCPASSWORD)
  rpc.call('getbalance', [], function (err, res) {
    if (err !== null) {
      var data = {
        id: process.env.ID,
        ip: process.env.SERVERIP,
        status: false,
        balance: "0"
      };
      sendDate(data);
    } else {
      var data = {
        id: process.env.ID,
        ip: process.env.SERVERIP,
        status: true,
        balance: res.result
      };
      sendDate(data);
    }
  });
}

checkMasternode();
