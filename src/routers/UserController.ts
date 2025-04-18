import express, { Request, Response } from 'express'
const userRouter = express.Router()

userRouter.post('/user', (req:Request,res:Response)=>{
    res.send("Usuário cadastrado com sucesso")
})
userRouter.get('/user', (req:Request,res:Response)=>{
    res.send("Lê todos os usuário")
})
userRouter.get('/user/:id', (req:Request,res:Response)=>{
   const id = req.params.id;
    res.send(`Lê o usuário com id ${id}`)
})

userRouter.put('/user/:id', (req:Request,res:Response)=>{
    const id = req.params.id;
     res.send(`Atualiza o usuário com id ${id}`)
 })
 userRouter.delete('/user/:id', (req:Request,res:Response)=>{
    const id = req.params.id;
     res.send(`Apaga o usuário com id ${id}`)
 })

 export default userRouter