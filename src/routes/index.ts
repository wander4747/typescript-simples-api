import { Request, Response, Router } from "express"
import ProductController from "@/controllers/product.controller"

const routes = Router()

routes.get('/api/products', ProductController.findAll)
routes.post('/api/products', ProductController.create)
routes.get('/api/products/:id', ProductController.find)
routes.put('/api/products/:id', ProductController.update)
routes.delete('/api/products/:id', ProductController.delete)
routes.get('/', (_: Request, response: Response) => {
    response.status(200).send({
        "message": "Hello Dev!"
    })
})

export default routes