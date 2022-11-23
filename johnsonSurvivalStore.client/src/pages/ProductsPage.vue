<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="product in products" :key="product.id">
        <card></card>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { shopService } from '../services/ShopService'
import { AppState } from '../AppState'

export default {
  setup() {
    onMounted(async () => {
        try {
          await shopService.getAllProducts('api/products')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
    })
    return {
        products: computed(() => AppState.products)
      }
    }
}
</script>

<style>

</style>