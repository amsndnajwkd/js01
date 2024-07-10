const http = require("http"); // http 모듈 사용;
const port = 3030;
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain; charset=utf-8");

const jsonData = require('./jsonData.json')


  console.log(1, jsonData);
  res.end(jsonData); /*obj를 JSON 형태로 변환, XML*/
});

server.listen(port, () => {
  // server.listen(port,function (){
  console.log(`${port}포트에서 서버가 가동됨${port - 30}포트가 아님.`);
  // ES6 신 문법 백틱(  `${}` )을 사용 : 탬플릿문자열, 템플릿 리터널
});
