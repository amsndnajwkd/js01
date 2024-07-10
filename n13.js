//유틸 도구들 불러오기 
//( 순서대로: express서버구축, path경로계산, logger자동기록 )
const express = require("express");
const path = require("path");
const logger = require("morgan");

//익스프레스 실행
const app = express();
//포트 설정
const port = 3000;

const _path = path.join(__dirname, "/dist");

//출력문들console(3개)
console.log(__dirname);
console.log(__dirname + "/dist");
console.log(_path);

app.get("/", (req, res) => {
    res.send('홈페이지입니다.')
});

app.get("/story", (req, res) => {
  const arr = [

  ];
  const data = ["Pretty", "Egg", "Dog", "Avengers", "kkkk"];
  let list = `<h1>링크를 선택하세요</h1><h2><ul>`;
  data.forEach(
    (v, i) => (list += `<li><a href="/story?id=${i}">${v}</a></li>`)
  );
  list += `</ul></h2> ${arr[req.query.id] ?? "선택하세요"}`;
  res.send(list);
});


//서버를 지정된 포트에서 시작시키고
app.listen(port, () => {
//다음을 출력합니다.
  console.log(port + "서버가 동작하였습니다.");
});
