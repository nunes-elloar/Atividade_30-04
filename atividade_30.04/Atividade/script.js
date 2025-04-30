import express, { response } from "express"
import cors from "cors"
import fs from "node:fs"

const app = express()
const DATABASE_URL = "./database/motorista.json"
const PORT = 3333
app.use(express.json())
app.use(cors({
   origin:"*",
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true 
}))

app.get("/motorista", (res, req) => {
    fs.readFile(DATABASE_URL, "utf-8", (err, data) =>{
        if(err){
            console.log(err)
            res.status(500).json({message:"Erro ao ler o artigo"})
            return;
        }
        const motorista = data
        res.status(200).json({motorista})
    })
});
app.post("/motorista", (res, req) => {
    const {nome, dataNascimento, numeroCart} = req.body;
    if(!nome || typeof nome !== "string" || nome.trim() === ""){
        res.status(400).json({message:"O nome é obrigatório e deve ser em texto!!!"})
        return;
    }
    if(!dataNascimento || typeof dataNascimento !== "string" || dataNascimento.trim() === ""){
        res.status().json({message:"A data de nascimento é obrigatório e deve ser em texto!!"})
        return;
    }
    if(!numeroCart || typeof numeroCart !== "string" || numeroCart.trim() === ""){
        res.status().json({message:"O número da carteira de habilitação e deve ser em texto!"})
        return;
    }
    fs.readFile(DATABASE_URL, "utf-8", (err, data) =>{
        if(err) {
            console.log(err)
            res.status(500).json({message:"Erro ao ler o artigo"})
            return;
        }
        const motorista = JSON.parse(data)

        const novoMotorista = {
            id: Date.now().toString(),
            nome,
        dataNascimento,
        numeroCart
        }

        motorista.push(novoMotorista)
        fs.writeFile


    })
})


/**
- Nome
- Data de nascimento
- Número da carteira de habilitação */

app.listen(PORT, ()=>{
    console.log("Servidor iniciado no portal:", PORT)
})