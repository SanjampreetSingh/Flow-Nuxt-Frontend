// export default async ({ context, $auth, store }) => {
//   console.log(context)
//   if (!store.state.auth.loggedIn) {
//     return
//   }
//   const auth = $auth
//   const authStrategy = auth.strategy.name
//   if (authStrategy === 'github' || authStrategy === 'gitlab') {
//     const token = auth.getToken(authStrategy).substr(7)
//     const authStrategyConverted =
//       authStrategy === 'github' ? 'github' : 'gitlab'
//     const url = `/oauthenticate/`
//     try {
//       context.app.$axios.onRequest((config) => {
//         config.headers['Content-Type'] = 'application/json'
//         config.headers['Access-Control-Allow-Origin'] = '*'
//       })
//       const { response } = await context.app.$axios.$post(url, {
//         data: {
//           provider: authStrategyConverted,
//           access_token: token
//         }
//       })
//       console.log(response)
//       auth.setToken('local', 'Bearer ' + response.data.token)
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }
