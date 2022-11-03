import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class ProductsService {
  async getAll(query = {}) {
    const products = await dbContext.Product.find(query)
    return products
  }

  async getById(id) {
    const product = await dbContext.Product.findById(id)
    if (!product) {
      throw new BadRequest('Product not found')
    }
    return product;
  }

  async addProduct(body) {
    const product = await dbContext.Product.create(body)
    return product;
  }
}

export const productsService = new ProductsService()