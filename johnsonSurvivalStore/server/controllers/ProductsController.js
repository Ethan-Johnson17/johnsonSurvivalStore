import BaseController from "../utils/BaseController";
import { productsService } from "../services/ProductsService";

export class ProductsController extends BaseController {
  constructor() {
    super('api/products')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.addProduct)
      // .put('/:id', this.editProduct)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const products = await productsService.getAll(query)
      return res.send(products)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const product = await productsService.getById(req.params.id)
      return res.send(product)
    } catch (error) {
      next(error)
    }
  }

  async addProduct(req, res, next) {
    try {
      req.body.id = req.params.id
      const product = await productsService.addProduct(req.body)
      return res.send(product)
    } catch (error) {
      next(error)
    }
  }
}