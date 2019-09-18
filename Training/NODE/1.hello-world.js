const http = require('http');

const server = http.createServer((req,res) => 
{
    res.end("HELLO WORLD\n");
}
);

server.listen(4242, () => 
{
    console.log('Server is Running....');
}
);