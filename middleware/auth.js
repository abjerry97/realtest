export default function ({
    store,
    redirect
  }) {
    if (!store.state.auth.user.loggedIn) {
      return redirect('/login')
    }
  }
