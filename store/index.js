export const state = () => ({
  darkMode: false,
})

export const mutations = {
  switchDarkMode(state) {
    state.darkMode = !state.darkMode
  }
}
