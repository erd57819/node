/*라우터
 메인서버가 모든 경로에 대한 처리를 하기는 부담스럽다. -> 페이지가 많아지면 경로도 증가
 각각의 경로에 관련된 일들은 라우터가 처리 app에 사용될 라우터만 등록
 app에게 사용할 라우터만 등록
*/

const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter")
const subRouter = require("./routes/subRouter")

// app에게 알려주기
// 매인경로로 들어오는 모든 요청은 MainRouter사용
app.use("/",mainRouter);
app.use("/minor",subRouter);

app.listen(3000);