<template>
  <div class="container">
    <div class="filters">
      <Search v-model="valueInput" />
      <FilterContinents :selected="selected" @click="changeSelect" />
    </div>
    <!-- <p>eso perro</p> -->
    <Loading v-if="$fetchState.pending" />
    <!-- <p v-else-if="$fetchState.error">Error while fetching mountains</p> -->
    <!-- <Error v-else-if="$fetchState.error"/> -->
    <!-- <p v-if="!countries.length">no hay nada</p> -->
    <div v-else class="countries">
      <Card
        v-for="(country, index) in filteredCountries"
        :key="index"
        :flag="country.flag"
        :name="country.name"
        :alpha-code="country.alpha3Code"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      countries: [],
      selected: 'All Countries',
      slug: 'all',
      valueInput: '',
    }
  },
  async fetch() {
    await this.getCountries()
  },
  fetchDelay: 1000,
  methods: {
    getCountries() {
      axios.get('https://restcountries.com/v2/' + this.slug).then((res) => {
        this.countries = res.data
      })
    },
    changeSelect(selected, slug) {
      this.selected = selected
      this.slug = slug
      this.valueInput = ''
      this.$fetch()
    },
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.valueInput.toLowerCase())
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2em;
  @media (max-width: 900px) {
    display: block;
  }
}
.countries {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3em;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
  }
}
</style>