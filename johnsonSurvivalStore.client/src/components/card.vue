<template>
    <div class="card rounded">
    <div class="card-body p-0">
      <div class="text-container p-4">
        <h3 class="card-title ">{{product.productName}}</h3>
        <p class="card-text ">{{product.description}}</p>
        <button class="btn btn-info" data-bs-toggle="modal" :data-bs-target="'#detailsFor' + product.id">Details</button>
      </div>
      <div class="img-container">
        <!--<img class="productImage img-fluid" :src="product.imageUrl" :alt="product.productName">-->
        <img :src="product.imgUrl" :alt="product.productName" class="img-fluid product-image">
      </div>
    </div>
  </div>

  <productModal :id="'detailsFor' + product.id">
    <template #modal-title>{{ product.productName }}</template>
    <template #modal-body>
      <productDetail :product="product" />
    </template>    
  </productModal>
  
</template>

<script>
import ProductDetail from './productDetail.vue'
import productModal from './productModal.vue'
  export default {
  components: { productModal, ProductDetail },
    props: {
      product: {
        type: Object
      }
    },
    setup(props) {

      return {

      }
    }
  }
</script>

<style>
  .card-title {
    min-height: 5rem;
  }

  .card-text {
    min-height: 5rem;
  }

  .product-image {
    height: 20rem;
  }
</style>
