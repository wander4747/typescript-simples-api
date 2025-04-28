import {Request, response, Response} from 'express'
import AppDataSource from '../database/connection'
import { Product } from '../entities/product.entity'
import { Repository } from 'typeorm'

class ProductController {

    private repository: Repository<Product>

    constructor() {
        this.repository = AppDataSource.getRepository(Product)
    }
    
    findAll = async (request: Request, response: Response): Promise<Response> => {
        const products = await this.repository.find()

        return response.status(200).send({
            data: products
        })
    }

    create = async (request: Request, response: Response): Promise<Response> => {
        const {name, description, weight} = request.body

        const product = new Product();
        product.name = name
        product.description = description
        product.weight = weight

        const productDb = await this.repository.save(product)

        return response.status(201).send({
            data: productDb
        })
    }
}

export default new ProductController