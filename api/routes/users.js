// Aqui estamos exportando o Express também
import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

// Estamos criando a variavel router, express.Router() vai indicar que isso aqui é uma rota
const router = express.Router()

// Estamos utilizando o metodo get, a barra siginifca que vai ser no raiz do Router, e estamos usando a função getUsers, essa função esta lá no controllers/user.js
router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router