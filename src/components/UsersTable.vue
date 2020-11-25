<template>
  <div>
    <table class="main-table">
      <thead class="main-table__head">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody class="main-table__body">
        <tr v-for="user in allUsers" :key="user.id" @click="getID(user.id)">
          <td data-title="Name">{{ user.name }}</td>
          <td data-title="Email">{{ user.email }}</td>
          <td data-title="Phone">{{ user.phone }}</td>
          <td data-title="Company">{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    allUsers: {
      required: true,
      type: Array,
    },
  },
  methods: {
    getID(id) {
      this.$router.push({ name: "User", params: { id } });
    },
  },
};
</script>