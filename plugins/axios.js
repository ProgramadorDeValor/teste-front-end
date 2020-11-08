export default function ({ store, $axios, redirect }) {
  $axios.onRequest((config) => {
    // if (config.url.startsWith(process.env.YOUTUBE_API_URL)) {
    // config.data.key = process.env.GOOGLE_API_KEY
    // }
    // if (!store.state.blockLoading) store.commit('setLoading', true)
  })

  $axios.onResponse((response) => {
    // store.commit('setLoading', false)
  })

  // eslint-disable-next-line handle-callback-err
  $axios.onError((err) => {
    // console.log(err)
    // store.commit('setLoading', false)
  })
}
