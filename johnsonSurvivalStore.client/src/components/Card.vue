<template>
  <div class="card rounded">
    <div class="card-body p-0">
      <div class="text-container p-4">
        <h3 class="card-title">{{product.productName}}</h3>
        <p class="card-text">{{product.description}}</p>
        <button class="btn btn-info" data-bs-toggle="modal" :data-bs-target="'#detailsFor' + product.id">Details</button>
      </div>
      <div class="img-container">
        <img :src="product.imgUrl" :alt="product.productName" class="img-fluid productImage">
      </div>
    </div>
  </div>

  <ProductModal :id="'detailsFor' + product.id" >
    <template #modal-title>{{ product.productName }}</template>
    <template #modal-body>
      <productDetails :product="product" />
    </template>
  </ProductModal>
</template>

<script>
export default {
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
.productImage {
  height: 20rem;
}

.card-title {
  min-height: 5rem;
}

.card-text {
  min-height: 5rem;
}
</style>