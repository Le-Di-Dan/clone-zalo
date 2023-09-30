function init() {
  return {
    keyword: "",
    matchUsers: [],
  };
}

export const state = init();

export const getters = {};

export const mutations = {
  SAVE_LIST_SEARCH(state, users) {
    state.matchUsers = users;
  },
};

export const actions = {
  async handleSearchUsers({ commit }, keyword) {
    try {
      if (!keyword.length) {
        return commit("SAVE_LIST_SEARCH", []);
      }
      const response = await this.$axios.get("/api/users", {
        params: {
          keyword,
        },
      });
      commit("SAVE_LIST_SEARCH", response.data.data.users);
    } catch (error) {
      console.log(error);
    }
  },
};
