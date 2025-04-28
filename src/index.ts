import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import 'module-alias/register'
import { Router, Request, Response } from 'express';

import '@/database/connection'
import routes from '@/routes'

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(routes)
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!')
})
  
app.listen(PORT, () => {
    console.log(`server running in port  ${PORT}`)
})