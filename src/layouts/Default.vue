<template>
  <div class="layout sticky-header">
    <header data-v-7e33895e="" class="header sticky">
      <div data-v-7e33895e="" class="container">
        <div data-v-7e33895e="" class="left">
          <g-link
            data-v-7e33895e=""
            to="/"
            aria-current="page"
            class="home-link active--exact active"
            ><img
              data-v-7e33895e=""
              src="/assets/img/logo.332701b7.svg"
              alt="Nichlas W. Andersen"
              class="logo"
          /></g-link>
        </div>
        <nav data-v-7e33895e="" class="nav right">
          <g-link data-v-7e33895e="" to="/journal" class="nav__link"
            >Journal</g-link
          >
          <g-link data-v-7e33895e="" to="/contact" class="nav__link"
            >Say Hi!</g-link
          >
        </nav>
      </div>
    </header>
    <slot />
    <footer data-v-07acb5f8="" class="footer">
      <div data-v-07acb5f8="" class="container">
        <span data-v-07acb5f8="">Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
