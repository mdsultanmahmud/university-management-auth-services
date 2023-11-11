import { Request, Response } from 'express'
import { createUserDB } from './users.service'

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
