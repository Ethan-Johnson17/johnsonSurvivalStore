<template>
  <div class="container my-4">
    <div class="row my-4">
      <h1>Johnson Survival Store</h1>
    </div>
    <div class="row">
      <div class="col-4" v-for="prod in products" :key="prod.id">
        <card :product="prod"></card>
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
