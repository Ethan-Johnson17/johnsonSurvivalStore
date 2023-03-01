import { AppState } from"../AppState";
import { api } from "./AxiosService";


class ShopService {
    async getAllProducts(query='') {
        const res =  await api.get(query)
        AppState.products = res.data
    }
}

export const shopService = new ShopService