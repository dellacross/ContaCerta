import express, { Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'
import path from 'path'

require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors()) // qualquer ip pode fzr as requisicoes
app.use(router)
app.use(
    '/files', 
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) { // Se for instancia de erro
        return res.status(400).json({error: err.message})
    }

    return res.status(500).json({status: 'error', message: 'internal server error'})
})

app.listen(3333, () => { 
    console.log("Servidor online!") 
})
