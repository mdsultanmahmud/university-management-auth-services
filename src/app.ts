
import express, { Application, Request ,Response } from 'express'
const app:Application = express()
import cors from 'cors'

// middleware 
app.use(cors())

// perser 
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req: Request, res: Response) => {
  res.send('Server is running successfully!')
})

export default app 