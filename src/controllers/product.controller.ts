import {Request, response, Response} from 'express'
import AppDataSource from '../database/connection'
import { Product } from '../entities/product.entity'

class ProductController {

    findAll = async (request: Request, response: Response): Promise<Response> => {
        const products = await AppDataSource.getRepository(Product).find()

        return response.status(200).send({
            data: products
        })
    }
}

export default new ProductController