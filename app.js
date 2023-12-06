const express = require("express");
const app = express();
const connection = require("./DBconnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/createDB", async (req, res) => {
  const query = await connection.query("create DATABASE user");
  res.send("db create successfully");
});
app.get("/createTable", async (req, res) => {
  const query = await connection.query(`CREATE TABLE profile (
        id int NOT NULL AUTO_INCREMENT ,
        firstName varchar(255),
        lastName varchar(255) NOT NULL,
        age int,
        PRIMARY KEY (id)
    );`);
  res.send("table create successfully");
});
app.get("/dropTable", async (req, res) => {
  const query = await connection.query(`DROP TABLE profile`);
  res.send("drop table successfully");
});
app.post("/createUser", async (req, res) => {
  const sql = `insert into profile (firstName,lastName,age) values ('sourabh','thakue','23');`;
  const query = await connection.query(sql);
  res.send(query);
});
app.get("/showUser", async (req, res) => {
  const sql = `select * from profile;`;
  const query = await connection.query(sql);
  res.send(query);
});
app.patch("/updateProfile", async (req, res) => {
  const sql = `update profile SET firstname='sourabh' where id = '${1}';`;
  const query = await connection.query(sql);
  res.send(query);
});
app.delete("/deleteProfile", async (req, res) => {
  const sql = `delete from profile where id = '${2}';`;
  const query = await connection.query(sql);
  res.send(query);
});

app.listen(8081, () => {
  console.log("server is running : 8081");
});
