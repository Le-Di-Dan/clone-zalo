<template>
  <div class="form-wrapper py-32 d-flex jc-center al-center">
    <div class="form-value">
      <form action="#" @submit.prevent>
        <h2 class="form-heading text-center">Sign up</h2>
        <div class="field my-30">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            v-model="user_name"
            required
            class="field__input pr-35 pl-5"
          />
          <label for="" class="field__label">Username</label>
        </div>
        <div class="field my-30">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="text"
            v-model="user_email"
            required
            class="field__input pr-35 pl-5"
          />
          <label for="" class="field__label">Email</label>
        </div>
        <div class="field my-30">
          <ion-icon
            v-if="!showPassword"
            name="eye-outline"
            @click="handleShowPassword"
          ></ion-icon>
          <ion-icon
            v-else
            name="eye-off-outline"
            @click="handleShowPassword"
          ></ion-icon>
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            required
            class="field__input pr-35 pl-5"
          />
          <label for="" class="field__label">Password</label>
        </div>
        <el-button type="success" class="w-full fs-16" @click="handleRegister"
          >Sign up</el-button
        >
        <div class="register fs-14 text-center mt-25 mb-10">
          <p>
            You have an account
            <a href="#" @click.prevent="() => $router.push('/auth/login/')">
              Login</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  name: "SignupPage",
  layout: "auth",
  auth: "guest",
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    ...mapFields({
      user_name: "authen.formSignup.user_name",
      user_email: "authen.formSignup.user_email",
      password: "authen.formSignup.password",
    }),
  },
  methods: {
    ...mapActions("authen", ["register"]),
    handleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    async handleRegister() {
      try {
        await this.register();
        await this.$auth.loginWith("local", {
          data: {
            user_email: this.user_email,
            password: this.password,
          },
        });
        this.$store.commit("authen/RESET_FORM");
        this.$message({
          message: "Sign up new account succeeded.",
          type: "success",
          duration: 3500,
        });
      } catch (error) {
        this.$message({
          message: "Sign up new account failed.",
          type: "warning",
          duration: 3500,
        });
      }
    },
  },
};
</script>

<style></style>
