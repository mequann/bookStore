import express from 'express'
import getAllInfo from '../controllers/sellectAllBooksC.js'
let getBookRoute=express.Router()
getBookRoute.get('/getAllbook',getAllInfo)
export default getBookRoute