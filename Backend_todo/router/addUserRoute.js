import express from 'express'
import { insertUser, login } from '../Controller/user.js'

const route = express.Router()

route.post("/insert-user", insertUser)
route.post("/login", login)

export default route