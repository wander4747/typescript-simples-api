import {Request, response, Response} from 'express'

class ProductController {

    findAll = async (request: Request, response: Response): Promise<Response> => {
        return response.status(200).send({
          data: []
        })
    }
}

export default new ProductController