<template>
  <div class="user-page">
    <div class="title user-page__title">
      <h1>Single users page</h1>
    </div>

    <Loader v-if="loading" />

    <table
      v-else
      class="single-user-table"
      v-for="user in singleUser"
      :key="user.id"
    >
      <tr>
        <th>User name</th>
        <td>{{ user.name }}</td>
      </tr>

      <tr>
        <th>User email</th>
        <td>{{ user.email }}</td>
      </tr>

      <tr>
        <th>User address</th>
        <td class="sub-table">
          <tr>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
          <tr>
            <td>{{ user.address.street }}</td>
            <td>{{ user.address.suite }}</td>
            <td>{{ user.address.city }}</td>
            <td>{{ user.address.zipcode }}</td>
          </tr>
        </td>
      </tr>

      <tr>
        <th>User phone</th>
        <td>{{ user.phone }}</td>
      </tr>

      <tr>
        <th>User website</th>
        <td>{{ user.website }}</td>
      </tr>

      <tr>
        <th>User company</th>
        <td>{{ user.company.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "User",
  data: () => ({
    userID: null,
    loading: true,
  }),
  async mounted() {
    const id = await this.$route.params.id;
    this.userID = id;
    this.loading = false;
  },
  computed: {
    singleUser() {
      return this.$store.getters.getSingleUser(this.userID);
    },
  },
};
</script>
