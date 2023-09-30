<template>
  <div>
    <el-button type="danger" @click="handleLogout">Logout</el-button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    async handleLogout() {
      try {
        await this.$auth.logout();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
