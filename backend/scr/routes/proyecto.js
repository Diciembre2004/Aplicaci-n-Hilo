import { Router } from "express";

import {
  login,
  saveUser,
  deleteUser,
  updateUser,
  getRecor,
  getRecorCount,
  saveRecor,
  deleteRecor,
  updateRecor,
} from "../controllers/proyecto.js";

const router = Router();

//aca las rutas
router.get("/login", login);
router.get("/login/submit"); //Esta ruta podría usarse para procesar la solicitud de inicio de sesión.
router.get("/login/success"); //Esta ruta podría usarse para mostrar una página de éxito después de que el usuario se haya autenticado.
router.post("/recordatorio", saveUser); //aca los recordatorios
router.delete("/recordatorio/:id", deleteUser); //borrar
router.put("/recordatorio/:id", updateUser); //actualizar por id

router.get("/recordatorio", getRecor);
router.get("/recordatorio/count", getRecorCount);
router.post("/recordatorio", saveRecor); //aca los recordatorios
router.delete("/recordatorio/:id", deleteRecor); //borrar
router.put("/recordatorio/:id", updateRecor); //actualizar por id

export default router;
