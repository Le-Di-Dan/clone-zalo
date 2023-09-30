<template>
  <header class="header d-flex px-16 py-8 jc-sp-between al-center">
    <div class="header__left mr-16">
      <div
        class="logo circle d-flex jc-center al-center pointer"
        @click="() => $router.push('/')"
      >
        ZD
      </div>
    </div>
    <div class="header__center d-flex jc-left al-center">
      <ul class="searchBox">
        <li class="searchBox__core">
          <input
            placeholder="Tìm kiếm"
            type="text"
            class="searchBox__input pl-46"
            v-model="keyword"
            @input="handleSearch"
          />
          <ion-icon name="search-outline" class="searchBox__icon"></ion-icon>
        </li>
        <Transition name="slide-fade">
          <div class="wrapper pt-14 px-16" v-if="matchUsers.length > 0">
            <li
              class="searchBox__item py-14 fs-14"
              v-for="user in matchUsers"
              :key="user._id"
            >
              {{ user.user_name }}
            </li>
          </div>
        </Transition>
      </ul>
    </div>
    <div class="header__right">
      <div
        class="avatar circle d-flex jc-center al-center pointer"
        @click="() => handleGoToProfile($auth.user._id)"
      >
        Đ
      </div>
    </div>
  </header>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { debounce } from "lodash";
export default {
  computed: {
    ...mapFields({
      keyword: "user.keyword",
      matchUsers: "user.matchUsers",
    }),
  },
  methods: {
    ...mapActions("user", ["handleSearchUsers"]),
    handleGoToProfile(id) {
      this.$router.push({
        path: `/profile/${id}/`,
      });
    },
    handleSearch: debounce(function () {
      this.handleSearchUsers(this.keyword);
    }, 350),
  },
};
</script>

<style></style>
