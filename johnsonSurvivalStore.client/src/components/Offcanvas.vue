<template>

  <div class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <slot name="Offcanvas-title"></slot>
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <slot name="Offcanvas-body"></slot>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>



