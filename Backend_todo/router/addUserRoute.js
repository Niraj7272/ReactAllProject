import express from 'express'
import { insertUser } from '../Controller/user.js'

const route = express.Router()

route.post("/insert-user", insertUser)

export default route