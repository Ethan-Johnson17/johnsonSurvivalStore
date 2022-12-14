import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ProductSchema } from '../models/Product'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Product = mongoose.model('Product', ProductSchema);

}

export const dbContext = new DbContext()
