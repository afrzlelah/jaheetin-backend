import express, { response } from "express";
import cors from "cors";
import db from "./db/conn.js";
import responses from "./template/responses.js";
const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["get"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res, nex) => {
  res
    .send(
      "<a href='https://jaheetin.vercel.app'>silahkan kunjungi web kami jaheet.in : </a>"
    )
    .status(200);
});

app.get("/toko", (req, res, next) => {
  db.query("SELECT * FROM barang", async (err, result) => {
    responses(200, result, "Semua data berhasil dikirim", res);
  });
});
app.get("/toko/find", (req, res, next) => {
  const name = req.query.nama;
  db.query(
    `SELECT * FROM barang WHERE namaBarang LIKE '%${name}%'`,
    async (err, result) => {
      responses(200, result, "Barang dengan kriteria nama is ready", res);
    }
  );
});
app.get("/toko/products/product/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const querySql = `SELECT * FROM barang WHERE id=?`;
  db.query(querySql, [id], (err, result) => {
    responses(200, result, "ok", res);
  });
});
app.listen(PORT, () => console.log(`Server running at port:${PORT}...`));
