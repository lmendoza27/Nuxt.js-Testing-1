export const state = () => ({

    Chupetin: "Hola a Todos",
    Agua: "Aguita",
    amigos: [],
    amigo: null,
    locales: ['de','pt','es'],
    locale: '',
    fallback_Locale: 'es'
})
export const getters = {

    getChupetines(state) {
        const nombre = state.Chupetin + state.Agua;
        return nombre
    },
    getLocalValue(state) {
        return state.locale
      }
}
export const mutations = { 
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
      },
    addAmigo( state ) {
        state.amigos = [state.amigo,...state.amigos]
    }
 }
 export const actions = { 
    addAmigoAction( context ) {
        context.commit('addAmigo');
    }
}
