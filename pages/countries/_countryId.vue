<template>
  <div class="container">
    <NuxtLink
      class="backButton"
      :class="{ darkMode: $store.state.darkMode }"
      :to="{ name: 'index' }"
    >
      <img src="@/assets/imgs/arrow-go-back-line.png" alt="back" />
      Back
    </NuxtLink>
    <Loading v-if="$fetchState.pending" />
    <div v-else class="grid">
      <img :src="country.flag" alt="country.name" />
      <div class="contentDescription">
        <h1>{{ country.name }}</h1>
        <div class="subGrid">
          <div>
            <p>
              Native Name: <span>{{ country.nativeName }}</span>
            </p>
            <p>
              Population: <span>{{ country.population }}</span>
            </p>
            <p>
              Region: <span>{{ country.region }}</span>
            </p>
            <p>
              Sub Region: <span>{{ country.subregion }}</span>
            </p>
            <p>
              Capital: <span>{{ country.capital }}</span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{{ country.topLevelDomain[0] }}</span>
            </p>
            <p>
              Currencies:
              <span v-for="(curr, index) in country.currencies" :key="index">
                <span>{{ curr.name }}</span
                ><span v-if="index + 1 < country.currencies.length">, </span>
              </span>
            </p>
            <p>
              Lenguages:
              <span v-for="(leng, index) in country.languages" :key="index">
                <span>{{ leng.name }}</span
                ><span v-if="index + 1 < country.languages.length">, </span>
              </span>
            </p>
          </div>
        </div>

        <p>
          Borders:
          <span v-if="!country.borders.length">No borders</span>
          <span
            v-else
            v-for="(border, index) in country.borders"
            :class="{ darkMode: $store.state.darkMode }"
            class="buttonBorder"
            :key="index"
          >
            {{ border }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head() {
    return {
      title: this.country.name,
    }
  },
  data() {
    return {
      country: '',
    }
  },

  async fetch() {
    await this.getCountry()
  },
  fetchDelay: 1500,
  methods: {
   async getCountry() {
      await axios
        .get(
          'https://restcountries.com/v2/alpha/' +
            this.$route.params.countryId
        )
        .then((res) => {
          this.country = res.data
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.backButton {
  padding: 0.5em 1.5em;
  text-decoration: none;
  margin-bottom: 1em;
  display: inline-flex;
  align-items: center;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  img {
    margin-right: 1em;
  }
  &.darkMode {
    background: var(--mainDarkBlue);
    color: #fff;
    img {
      filter: invert(1);
    }
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8em;
  img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  @media (max-width: 900px) {
    gap: 2em;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
  }
}
.subGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
  @media (max-width: 600px) {
    margin-top: 0.5em;
  }
}
p {
  margin: 0.6em 0;
}
span {
  opacity: 0.8;
}
.buttonBorder {
  padding: 0.3em 1em;
  margin: 0.5em 0.5em;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: inline-block;
  &.darkMode {
    background: var(--mainDarkBlue);
  }
}
</style>