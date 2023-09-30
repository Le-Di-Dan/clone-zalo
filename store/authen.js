import { getField, updateField } from "vuex-map-fields";

function initFormLogin() {
  return {
    user_email: "",
    password: "",
  };
}

function initFormSignup() {
  return {
    user_name: "",
    user_email: "",
    password: "",
  };
}
function init() {
  return {
    isLoggedIn: false,
    formLogin: initFormLogin(),
    formSignup: initFormSignup(),
    user: {},
  };
}
export const state = () => ({
  ...init(),
});

export const actions = {
  async register({ commit, state }) {
    try {
      await this.$axios.post("/auth/sign-up", {
        ...state.formSignup,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async logout({ commit }) {},
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  RESET_FORM(state, type = "SIGN_UP") {
    switch (type) {
      case "SIGN_UP":
        state.formSignup = initFormSignup();
        break;
      case "LOG_IN":
        state.formLogin = initFormLogin();
        break;
      default:
        throw new Error("Invalid type reset");
    }
  },
};
