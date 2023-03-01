<template>
  <img :src="product.imgUrl" :alt="product.productName" class="img-fluid productImage">
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  setup(props) {
    return
  }

}
</script>

<style>

</style>