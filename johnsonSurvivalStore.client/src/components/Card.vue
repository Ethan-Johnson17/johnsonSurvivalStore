<template>
  <div class="card rounded">
    <div class="card-body p-0">
      <div class="text-container p-2">
        <h3 class="card-title">Title</h3>
        <p class="card-text"></p>
      </div>
      <div class="img-container">
        <!-- <img class="productImage img-fluid" :src="product.imageUrl" :alt="product.productName"> -->
        <img src="https://thiscatdoesnotexist.com" alt="Product" class="img-fluid">
      </div>
    </div>
  </div>
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
  width: 100%;
}

.text-container {
  height: 10rem;
}
</style>