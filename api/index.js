//Foi importado o Express (Aquele que Constroi a API) instalado na primeira biblioteca
import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

//Foi criado uma variável App para armazenar esse Express 
const app = express()

// para usarmos o json com modo POST e alterações
app.use(express.json())
// Para evitar alguns conflitos rodando localmente
app.use(cors())

app.use("/", userRoutes)

// Variavel vai escutar a porta 8800
app.listen(8800)