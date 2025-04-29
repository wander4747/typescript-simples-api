import {Request, Response} from 'express'
import { ProductRepository } from '@/repositories/product.repository'
import { CreateProductDTO, UpdateProductDTO } from '@/dto/product.dto'
import { validate } from 'class-validator'

class ProductController {

    private productRepository: ProductRepository

    constructor() {
        this.productRepository = new ProductRepository
    }
    
    findAll = async (request: Request, response: Response): Promise<Response> => {
        const products = await this.productRepository.getAll()

        return response.status(200).send({
            data: products
        })
    }

    create = async (request: Request, response: Response): Promise<Response> => {
        const {name, description, weight} = request.body
        
        const createProductDTO = new CreateProductDTO
        createProductDTO.name = name
        createProductDTO.description = description
        createProductDTO.weight = weight

        const errors = await validate(createProductDTO)
        if (errors.length > 0) {
            return response.status(422).send({
                error: errors
            })
        }

        const productDb = await this.productRepository.create(createProductDTO)

        return response.status(201).send({
            data: productDb
        })
    }

    find = async (request: Request, response: Response): Promise<Response|null> => {
        const id: string = request.params.id

        const product = await this.productRepository.find(id)
        if (!product) {
            return response.status(404).send({
                error: 'Product not found'
            })
        }

        return response.status(200).send({
            data: product
        })
    }

    update = async(request: Request, response: Response): Promise<Response> => {
        const id: string = request.params.id
        const {name, description, weight} = request.body

        const updateDto = new UpdateProductDTO
        updateDto.id = id
        updateDto.name = name
        updateDto.description = description
        updateDto.weight = weight

        const errors = await validate(updateDto)
        if (errors.length > 0) {
            return response.status(422).send({
                errors
            })
        }

        try {
            const productDb = await this.productRepository.update(updateDto)
            if (!productDb) {
                return response.status(404).send({
                    error: 'Product Not Found'
                })
            }
            return response.status(200).send({
                data: productDb
            })
        } catch (error) {
            return response.status(500).send({
                error: 'Internal error'
            })
        }
    }

    delete = async(request: Request, response: Response): Promise<Response> => {
        try {
            const id: string = request.params.id
            await this.productRepository.delete(id)

            return response.status(204).send({})
        } catch (error) {
            return response.status(400).send({
                error: "Error deleting"
            })
        }
    }
}

export default new ProductController