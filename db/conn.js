import sql from "mysql2";

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "bismillah",
  database: "toko",
});

db.connect((status) => {
  if (status) {
    console.log("Connection to database toko is not succer");
  } else {
    console.log(status);
    console.log("Connection to database toko is success");
  }
});

export default db;
