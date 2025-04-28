import { Request, Response, Router } from "express"
import productController from "@/controllers/product.controller"

const routes = Router()

routes.get('/api/products', productController.findAll)
routes.post('/api/products', productController.create)
routes.get('/api/products/:id', productController.find)
routes.put('/api/products/:id', productController.update)
routes.delete('/api/products/:id', productController.delete)

export default routes