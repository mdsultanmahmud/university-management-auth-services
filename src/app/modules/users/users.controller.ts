import { Request, Response } from 'express'
import { createUserDB, getAllUsersDB } from './users.service'

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersDB()
    res.status(200).send({
      succress: true,
      message: 'all users!!',
      data: users,
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Users is not found!',
    })
  }
}

// create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const createdUser = await createUserDB(user)
    res.status(200).send({
      succress: true,
      message: 'User created successfully!!',
      data: createdUser,
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'User is not created!',
    })
  }
}
