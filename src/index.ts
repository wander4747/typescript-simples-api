import express from 'express'

import { Router, Request, Response } from 'express';

import './database/connection'

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`server running in port  ${PORT}`)
})