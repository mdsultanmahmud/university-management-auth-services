import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { globalErrorHanlder } from './app/middlewares/globalErrorHandler'
import usersRoutes from './app/modules/users/users.route'
const app: Application = express()
// middleware
app.use(cors())

// perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// users route
app.use('/api/v1/users', usersRoutes)

//testing
app.get('/', async (req: Request, res: Response) => {
  // Promise.reject(new Error('Unhandled Promise Rejection'))
  // console.log(x)
  res.send('Server is running successfully!')
  // throw new ApiError(400, 'baler error khaite khaite jibon gelo!!')
  // next('wow this is great error!!!')
})

// global error handler
app.use(globalErrorHanlder)

export default app
