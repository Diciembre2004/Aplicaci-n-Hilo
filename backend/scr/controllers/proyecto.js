import { connect } from ".../database.js";
import router from "../routes/proyecto";

// usuarios
export const login = async (req, res) => {
  const { email, Contrasena } = req.body;

  try {
    const connection = await connect();
    const [rows] = await connect.query("SELECT * FROM Usuarios WHERE email=?", [
      email,
    ]);

    if (rows.lenght > 0) {
      if (Contrasena === rows[0].Contrasena) {
        res.status(200).json({ sucess: true });
      } else {
        res.status(401).json({ sucess: false });
      }
    } else {
      res.status(401).json({ sucess: false, message: "No existe" });
    }
  } catch (err) {
    res.json({ sucess: false, message: err });
  }
};
export const saveUser = async (req, res) => {
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO task(ID_Usuario, Contraseña) VALUES (?,?)",
    [req.body.ID_Usuario, req.body.Contrasena]
  );
};
// 56:55 https://www.youtube.com/watch?app=desktop&v=HMKVnwlhJO0&ab_channel=FaztCode
export const deleteUser = async (req, res) => {
  res.send("hi");
};

export const updateUser = async (req, res) => {
  res.send("hi");
};

// recordatorios
export const getRecor = async (req, res) => {
  const connection = await connect();
  const [rows] = await connect.query("SELECT * FROM Recor WHERE id = ?", [
    req.params.id,
  ]);
  console.log(rows[0]);
  res.json(rows[0]);
};

export const getRecorCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM Recor");
  res.json(rows[0]["COUNT(*)"]);
};

export const saveRecor = async (req, res) => {
  const connection = await connect();
  const result = await connection.query(
    "INSERT INTO task(ID_Recordatorio, Dosis) VALUES (?,?)",
    [req.body.ID_Recordatorio, req.body.Dosis]
  );
  console.log(result);
};

export const deleteRecor = async (req, res) => {
  res.send("hi");
};

export const updateRecor = async (req, res) => {
  res.send("hi");
};
