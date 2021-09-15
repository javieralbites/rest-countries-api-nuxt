<template>
  <div class="search" :class="{ darkMode: $store.state.darkMode }">
    <img src="@/assets/imgs/search-line.png" alt="search" />
    <input
      v-model="inputModel"
      type="text"
      placeholder="Search for a country.."
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  computed: {
    inputModel: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 500px;
  display: flex;
  align-items: center;
  padding: 1em;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 0.5em;
  }
  &.darkMode {
    background: var(--mainDarkBlue);
    img {
      filter: invert(1);
    }
    input {
      color: #fff;
    }
  }
  img {
    margin-right: 1em;
  }
  input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1em;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
}
</style>