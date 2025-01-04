<template>
  <div class="form-wrapper py-32 d-flex jc-center al-center">
    <div class="form-value">
      <form action="#" @submit.prevent>
        <h2 class="form-heading text-center">Login EC2</h2>
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
        <div class="forget d-flex jc-center al-center">
          <label for="" class="d-flex jc-center al-center">
            <input type="checkbox" name="" id="" />
            Remember Me
          </label>
          <a class="d-ib ml-4" href="">Forget Password</a>
        </div>
        <el-button type="primary" class="w-full fs-16" @click="handleLogin"
          >Log in</el-button
        >
        <div class="register fs-14 text-center mt-25 mb-10">
          <p>
            Don't have a account
            <a href="#" @click.prevent="() => $router.push('/auth/signup/')">
              Register</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "LoginPage",
  layout: "auth",
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    ...mapFields({
      user_email: "authen.formLogin.user_email",
      password: "authen.formLogin.password",
    }),
  },
  mounted() {
    this.$message({
      message: "This website is built from EC2 and hosted on S3.",
      type: "success",
      duration: 3500,
    });
  },
  methods: {
    handleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            user_email: this.user_email,
            password: this.password,
          },
        });
        this.$store.commit("authen/RESET_FORM", "LOG_IN");
        this.$message({
          message: "Login succeeded.",
          type: "success",
          duration: 3500,
        });
      } catch (error) {
        console.log(error);
        this.$message({
          message: "Login failed.",
          type: "warning",
          duration: 3500,
        });
      }
    },
  },
};
</script>

<style></style>
