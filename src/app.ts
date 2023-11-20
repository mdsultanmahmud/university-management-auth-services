import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
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
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // Promise.reject(new Error('Unhandled Promise Rejection'))
  // console.log(x)
  // res.send('Server is running successfully!')
  // throw new ApiError(400, 'baler error khaite khaite jibon gelo!!')
  next('wow this is great error!!!')
  // throw new Error('Testing errro logger')
})

// global error handler
app.use(globalErrorHanlder)

export default app
