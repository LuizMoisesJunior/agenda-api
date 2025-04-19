import express from 'express'
import cors from 'cors'
import userRouter from './controller/UserController';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res)=>{
    res.send('Hellow World')
})

app.use(cors({
    origin:['http://localhost:3000']
}))

app.use('/api',userRouter)

app.use((req,res)=>{
    res.status(404)
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando com sucesso com ${HOSTNAME}:${PORT}`)
})