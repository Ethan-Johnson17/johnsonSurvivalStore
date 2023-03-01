<template>
  <form @submit.prevent="editAccount()">
    <div class="container-fluid">
      <div class="row my-4">
        <div class="col-6">
          <label for="picture">Image URL</label>
          <input type="text" v-model="state.editable.picture" name="picture">
        </div>
      </div>
      <div class="row my-4">
        <div class="col-12 my-3">
          <label for="name">Name:</label>
          <input type="text" v-model="state.editable.name" name="name">
        </div>
        <!-- <div class="col-12 my-3">
          <label for="lastName">Last Name:</label>
          <input type="text" v-model="state.editable.lastName" name="lastName">
        </div> -->
      </div>
      <div class="row my-4 d-flex justify-content-end">
        <div class="col-3">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';

export default {
  props: {
    account: {
      type: Object
    }
  },
  setup() {
    const state = reactive({editable: {}})
    return {
      state,

    async editAccount() {
      console.log(state.editable)
      try {
        await accountService.editAccount(state.editable)
      } catch (error) {
        logger.log(error)
        Pop.toast('Failed to edit account', 'error')
      }
    }
  }
}
}
</script>

<style>

</style>