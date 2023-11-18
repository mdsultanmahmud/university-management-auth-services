import express from 'express'
import { createUser, getAllUsers } from './users.controller'
const router = express.Router()
// get all users
router.get('/', getAllUsers)
// create user
router.post('/create-user', createUser)

export default router
