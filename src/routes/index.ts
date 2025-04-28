import { Request, Response, Router } from "express"
import productController from "../controllers/product.controller"

const routes = Router()

routes.get('/api/products', productController.findAll)
routes.post('/api/products', productController.create)


export default routes