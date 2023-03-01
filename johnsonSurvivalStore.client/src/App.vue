<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <Offcanvas id="accountDetailsOffcanvas">
      <template #Offcanvas-title>Account Details</template>
      <template #Offcanvas-body>
        <accountDetails />
      </template>
    </Offcanvas>
  </main>
   <footer class="bg-dark text-light">
    Mine
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
