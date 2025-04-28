import express from 'express'

import { Router, Request, Response } from 'express';

import './database/connection'
import routes from './routes'

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()
app.use(routes)


app.listen(PORT, () => {
    console.log(`server running in port  ${PORT}`)
})