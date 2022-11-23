export default function ({redirect, store}) {
    const isAuthenticated = store.state.auth.userId ? true : false
    if (!isAuthenticated) {
      redirect({name: 'login'})
    }
}