import { api } from "./AxiosService"
import { AppState } from "../AppState"


class ShopService {
  async getAllProducts(query = '') {
    const res = await api.get(query);
    AppState.products = res.data;
  }
}

export const shopService = new ShopService();