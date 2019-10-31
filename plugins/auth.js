export default async ({ app }) => {
  const isAuthenticated = app.store.state.auth.loggedIn
  if (isAuthenticated && typeof app.$auth !== 'undefined') {
    const auth = app.$auth
    const authStrategy = auth.strategy.name
    if (authStrategy === 'github' || authStrategy === 'gitlab') {
      const token = auth.getToken(authStrategy).substr(7)
      const authStrategyConverted =
        authStrategy === 'github' ? 'github' : 'gitlab'
      const url = `/oauthenticate/${authStrategyConverted}/${token}/`
      try {
        // app.$axios.setHeader('Authorization', null)
        // app.$axios.onRequest((config) => {
        //   config.headers.Authorization = null
        // })
        const { data } = await app.$axios.$post(url, null)
        auth.setToken('github', null)
        auth.setToken('local', 'Bearer ' + data.token)
        setTimeout(() => {
          auth.setStrategy('local')
          setTimeout(() => {
            auth.fetchUser()
            location.reload(true)
          })
        })
      } catch (e) {
        // eslint-disable-next-line
        console.log(e)
      }
    }
  }
}
