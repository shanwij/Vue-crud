<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>
      <button class="mini ui blue button" @click="onEdit">Edit</button>
      <button class="mini ui red button" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script> 

  export default {
    name : 'User',

    props: {
    user : {
      type: Object
    }
  },
  methods: {
    onDelete() {
      // window.console.log("customer delete " + this.customer.id);
      this.$emit("onDelete", this.user.id);
    },
    onEdit() {
      // window.console.log("customer edit " + this.customer.id);
      this.$emit("onEdit", this.user);
    }
  }
  };
</script>