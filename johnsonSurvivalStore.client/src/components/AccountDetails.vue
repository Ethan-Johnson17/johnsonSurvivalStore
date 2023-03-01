<template>
  <div class="about text-center">
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <router-link :to="{ name: 'Account' }">
      <div class="list-group-item dropdown-item list-group-item-action" data-bs-dismiss="offcanvas">
        Manage Account
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>

</style>