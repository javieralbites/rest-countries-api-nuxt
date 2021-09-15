<template>
  <NuxtLink
    tag="div"
    :to="{ name: 'countries-countryId', params: { countryId: alphaCode } }"
    class="card"
    :class="{ darkMode: $store.state.darkMode }"
  >
    <div class="contentFlag">
      <img :src="flag" :alt="name" />
    </div>
    <div class="contentDescription" >
      <h4>{{ name }}</h4>
      <p>
        Population:<span> {{ population.toLocaleString() }}</span>
      </p>
      <p>
        Region:<span> {{ region }}</span>
      </p>
      <p>
        Capital:<span> {{ capital }}</span>
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    flag: String,
    name: String,
    alphaCode: String,
    population: Number,
    region: String,
    capital: String,
  },
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.005);
  }
  &.darkMode{
    background: var(--mainDarkBlue);
  }
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.contentDescription {
  padding: 1em;
  p {
    font-size: small;
    margin: 0.3em 0;
    span {
      opacity: 0.8;
    }
  }
  
}
</style>