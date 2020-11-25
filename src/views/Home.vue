<template>
  <div class="home-page">
    <div class="title home-page__title">
      <h1>All users page</h1>
    </div>

    <Loader v-if="loading" />

    <UsersTable v-else :allUsers="allUsers" />
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable";

export default {
  name: "Home",
  data: () => ({
    loading: true,
  }),
  components: {
    UsersTable,
  },
  computed: {
    allUsers() {
      return this.$store.state.users;
    },
  },
  async mounted() {
    await this.$store.dispatch("getUsers");

    this.loading = false;
  },
};
</script>
