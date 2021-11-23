<template>
  <div class="app" :class="{ darkMode: $store.state.darkMode }">
    <nav :class="{ darkMode: $store.state.darkMode }">
      <h2>Where in the world?</h2>
      <div class="button" @click="$store.commit('switchDarkMode')">
        <span :class="{ darkMode: $store.state.darkMode }"></span> Dark Mode
      </div>
    </nav>
    <Nuxt keep-alive />
  </div>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 5em;
  box-shadow: -1px 1px 18px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 680px) {
    padding: 1em;
  }
  &.darkMode {
    background: var(--mainDarkBlue);
  }
  h2 {
    @media (max-width: 680px) {
      font-size: 0.9em;
    }
  }
  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    @media (max-width: 680px) {
      font-size: 0.8em;
    }
    span {
      width: 20px;
      height: 20px;
      margin-right: 0.5em;
      background-image: url('@/assets/imgs/moon-line.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: background-image 0.5s ease;
      &.darkMode {
        filter: invert(1);
        background-image: url('@/assets/imgs/moon-fill.png');
      }
    }
  }
}
</style>