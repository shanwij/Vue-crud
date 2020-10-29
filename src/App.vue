<template>
  <div id="app">
    <div class="ui fixed inverted menu vue-color">
      <div class="ui container">
        <a href="#" class="header item">Vue JS CRUD with Laravel API</a>
      </div>
    </div>

    <div class="ui main container">
      <Form :form="form" @onFormSubmit="onFormSubmit" />
      <Loader v-if="loader" /> 
      <Detailtbl
        :customers="customers"
        @onDelete="onDelete"
        @onEdit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "./components/Form";
import Detailtbl from "./components/Detailtbl";
import Loader from "./components/Loader";
export default {
  name: "App",
  components: {
    Form,
    Detailtbl,
    Loader
  },
  data() {
    return {
      url: "http://localhost/laravel-rest-api/public/api/customers",
      users: [],
      form: { name: "", email: "", isEdit: false },
      loader: false
    };
  },
  methods: {
    getUsers() {
      this.loader = true;
      axios.get(this.url).then(data => {
        this.users = data.data;
        this.loader = false;
      });
    },
    deleteUser(id) {
      this.loader = true;
      axios
        .delete(`${this.url}/${id}`)
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert(e);
        });
    },
    createUser(data) {
      this.loader = true;
      axios
        .post(this.url, {
          name: data.name,
          email: data.email
        })
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert(e);
        });
    },
    editUser(data) {
      this.loader = true;
      axios
        .put(`${this.url}/${data.id}`, {
          name: data.name,
          email: data.email
        })
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert(e);
        });
    },
    onDelete(id) {
      // window.console.log("app delete " + id);
      this.deleteUser(id);
    },
    onEdit(data) {
      // window.console.log("app edit ", data);
      this.form = data;
      this.form.isEdit = true;
    },
    onFormSubmit(data) {
      // window.console.log("app onFormSubmit", data);
      if (data.isEdit) {
        // call edit customer
        this.editUser(data);
      } else {
        // call create customer
        this.createUser(data);
      }
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style>
.vue-color {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg") !important;
}
.main.container {
  margin-top: 60px;
}
.submit-button {
  margin-top: 24px !important;
  float: right;
}
.data {
  margin-top: 15px;
}
thead tr th {
  background: #e0e0e0 !important;
}
.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>