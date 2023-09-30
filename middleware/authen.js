export default function ({ route, redirect, store, app }) {
  const isLoggedIn =
    store.state.auth.isLoggedIn || localStorage.getItem("refresh_token");
  !isLoggedIn &&
    route.path !== "/auth/login/" &&
    route.path !== "/auth/signup/" &&
    redirect("/auth/login/");
}
