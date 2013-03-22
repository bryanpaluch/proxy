var httpProxy = require('http-proxy');


var options = {
  router: {
    'rtcwith.me'                  : 'localhost:3000',
    'commwith.me'                 : 'localhost:3000',
    'bryanpaluch.com'             : 'localhost:3001',
    'www.bryanpaluch.com'         : 'localhost:3001',
    'homemonitor.bryanpaluch.com' : 'localhost:3003',
    'connector.gridreact.com'     : 'localhost:3010',
    'hooks.gridreact.com'         : 'localhost:3011',
    'hooks.bryanpaluch.com'       : 'localhost:3011',
    'up.bryanpaluch.com'          : 'localhost:2812',
    'gridreact.com'               : 'localhost:3003',
    'interact.gridreact.com'      : 'localhost:3003'
  }
}

httpProxy.createServer(options).listen(80);

process.setuid('ubuntu');

console.log('proxy listening on 80');
