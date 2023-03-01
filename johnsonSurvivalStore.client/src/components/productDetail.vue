<template>
  <img :src="product.imgUrl" :alt="product.productName" class="img-fluid product-image"> 
</template>

<script>
export default {
    props: {
        product: {
            type: Object
        }
    },
    setup(props) {
        return;
    }

}
</script>

<style>

</style>