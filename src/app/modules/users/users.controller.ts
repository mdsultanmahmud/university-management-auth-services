import { RequestHandler } from 'express'
import { createUserDB, getAllUsersDB } from './users.service'

// get all users
export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await getAllUsersDB()
    if (!users) {
      res.status(400).send({
        succress: false,
        message: 'Users is not found!',
      })
    }
    res.status(200).send({
      succress: true,
      message: 'all users!!',
      data: users,
    })
  } catch (error) {
    next(error)
  }
}

// create user
export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body
    const createdUser = await createUserDB(user)
    res.status(200).send({
      succress: true,
      message: 'User created successfully!!',
      data: createdUser,
    })
  } catch (error) {
    next(error)
  }
}
