import functions, { https } from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getDogs } from './src/dogs.js'
import { testApi } from './src/dogs.js'
const app=express()
app.use(cors())
app.use(express.json())


app.get('/dogs', getDogs)

app.get('/test', testApi)


// instead of app.listen 

// we need to create a cloud function and 2 point it to app
export const api = functions.https.onRequest(app)

