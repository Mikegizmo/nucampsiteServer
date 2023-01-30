const cors = require('cors');

const whitelist = ['http://localohost:3000', 'https://localhost:3443'];
const corsOptionsDelegate = (req, callback) => {
  let corsWithOptions;
  console.log(req.header('Origin'));
  if(whitelist.indexOf(req.header('Origin')) !== -1) {
    corsWithOptions = { origin: true };
  } else {
    corsWithOptions = { origin: false };
  }
  callback(null, corsWithOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);