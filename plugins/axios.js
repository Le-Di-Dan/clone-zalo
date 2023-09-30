export default function ({ $axios, store, redirect, $auth }) {
  if (process.client) {
    $axios.onRequest((cf) => {
      $axios.setHeader(
        "refresh_token",
        localStorage.getItem("refresh_token") ?? ""
      );
    });
    $axios.onResponse((response) => {
      if (response.data?.data?.refresh_token) {
        console.log(response.data.data.refresh_token);
        localStorage.setItem("refresh_token", response.data.data.refresh_token);
      }
      return response;
    });
    $axios.onError(async (err) => {
      const originalRequest = err.config;
      if (err.response.status === 401) {
        if (err.response.data.message === "ACCESS_TOKEN_INVALID") {
          originalRequest._retry = true;
          const result = await store.dispatch("auth/renewAccessToken");
          if (result) {
            originalRequest.headers["Authorization"] = `Bearer ${
              sessionStorage.getItem("access_token") ?? ""
            }`;
            return $axios(originalRequest);
          }
        }
      }
      return Promise.reject(err);
    });
  }
}
