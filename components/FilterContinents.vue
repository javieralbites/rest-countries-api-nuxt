<template>
  <div
    class="select"
    :class="{ darkMode: $store.state.darkMode }"
    @click="changeSelectState"
  >
    <span>{{ selected }}</span>
    <img src="@/assets/imgs/arrow-drop-down-fill.png" alt="drow" />
    <div class="drop-down" :class="{ active: selectActive }">
      <ul>
        <li @click="changeSelect('All Countries', 'all')">All Countries</li>
        <li @click="changeSelect('Africa', 'region/africa')">Africa</li>
        <li @click="changeSelect('Americas', 'region/americas')">Americas</li>
        <li @click="changeSelect('Asia', 'region/asia')">Asia</li>
        <li @click="changeSelect('Europe', 'region/europe')">Europe</li>
        <li @click="changeSelect('Oceania', 'region/oceania')">Oceania</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: String,
  },
  data() {
    return {
      selectActive: false,
    }
  },
  methods: {
    changeSelectState() {
      this.selectActive = !this.selectActive
    },
    changeSelect(selected, slug) {
      this.$emit('click', selected, slug)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: relative;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 200px;
  &.darkMode {
    background: var(--mainDarkBlue);
    img {
      filter: invert(1);
    }
    .drop-down {
      background: var(--mainDarkBlue);
    }
  }
  .drop-down {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: absolute;
    z-index: 100;
    top: 100%;
    left: 0;
    width: 100%;
    display: none;
    background: #fff;
    &.active {
      display: block;
    }
    ul {
      list-style: none;
      li {
        padding: 0.5em 1em;
        &:hover {
          background: rgb(187, 182, 182);
        }
      }
    }
  }
}
</style>