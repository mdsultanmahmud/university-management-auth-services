import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRoutes from './app/modules/users/users.route'
// middleware
app.use(cors())

// perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// users route
app.use('/api/v1/users', usersRoutes)

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running successfully!')
})

export default app
