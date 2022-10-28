import express from 'express'
import { router } from './routes'
import env from "dotenv"

const app = express()

app.use(express.json())
env.config()
app.use(router)

export { app }