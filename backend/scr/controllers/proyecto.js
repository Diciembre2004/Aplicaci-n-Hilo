import { connect } from "../database.js";

export const login = async (req, res) => {
  const { email, contrasena } = req.body;

  try {
    const connection = await connect();
    const [rows] = await connection.query(
      "SELECT * FROM Usuarios WHERE email=?",
      [email]
    );

    if (rows.length > 0) {
      if (contrasena === rows[0].contrasena) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const saveUser = async (req, res) => {
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO task(ID_Usuario, Contraseña) VALUES (?,?)",
    [req.body.ID_Usuario, req.body.Contrasena]
  );
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const connection = await connect();

    // Verificar si el usuario ya existe en la base de datos
    const [existingUser] = await connection.query(
      "SELECT * FROM Usuarios WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      // Si el usuario ya existe, enviar un mensaje de error
      return res
        .status(400)
        .json({ success: false, message: "El usuario ya está registrado." });
    }

    // Insertar el nuevo usuario en la base de datos
    await connection.query(
      "INSERT INTO Usuarios (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    // Enviar una respuesta de éxito
    res
      .status(201)
      .json({ success: true, message: "Usuario registrado exitosamente." });
  } catch (error) {
    // Si ocurre algún error durante el proceso, enviar un mensaje de error
    console.error("Error al registrar usuario:", error);
    res
      .status(500)
      .json({ success: false, message: "Error interno del servidor." });
  }
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
