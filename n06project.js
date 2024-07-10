const http = require('http');
const fs = require('fs');
const port = 3030;

const server = http.createServer((req,res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    const path = './nodejs/index2.html';
    fs.readFile(path,(err,data) => {
        if(err){
            console.log(err);
            res.end('Html 읽을 때 에러가 났어요.');
        } else {
            res.end(data);
        }
    });
});

server.listen(port, () => console.log(`${port}에서 서버가 가동됨`));
