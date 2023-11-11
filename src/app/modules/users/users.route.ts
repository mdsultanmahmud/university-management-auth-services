import express from 'express'
import { createUser } from './users.controller'
const router = express.Router()
// create user
router.post('/create-user', createUser)

export default router
