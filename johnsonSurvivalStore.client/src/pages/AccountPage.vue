<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <button class="btn btn-priamry" data-bs-toggle="offcanvas" data-bs-target="#editAccountOffcanvas">Edit Account</button>
  </div>
  <Offcanvas id="editAccountOffcanvas">
    <template #Offcanvas-title>Edit Account Details</template>
    <template #Offcanvas-body>
      <EditAccount :account="account"></EditAccount>
      
    </template>
  </Offcanvas>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
