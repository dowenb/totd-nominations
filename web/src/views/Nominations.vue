<template>
  <div>
    <h1>nominations</h1>
    <table id="nominations" class="ui celled compact table">
      <thead>
        <tr>
          <th><i class=""></i>Name</th>
          <th><i class=""></i>Note</th>
          <th><i class=""></i>Twitter</th>
          <th><i class=""></i>Linkedin</th>
          <th><i class=""></i>Web Links</th>
          <th><i class="info icon"></i></th>
          <th><i class="edit icon"></i></th>
          <th><i class="trash icon"></i></th>
<!-- 
          <th colspan="4"></th> -->
        </tr>
      </thead>
      <tr v-for="(nomination, i) in nominations" :key="i">
        <td>{{ nomination.name }}</td>
        <td>{{ nomination.note }}</td>
        <td>{{ nomination.twitter }}</td>
        <td>{{ nomination.linkedin }}</td>
        <td>{{ nomination.weblinks }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: nomination._id } }"
            >Show</router-link
          >
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: nomination._id } }"
            >Edit</router-link
          >
        </td>
        <td
          width="75"
          class="center aligned"
          @click.prevent="onDestroy(nomination._id)"
        >
          <a :href="`/nominations/${nomination._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "nominations",
  data() {
    return {
      nominations: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletenomination(id);
      this.flash("nomination deleted sucessfully!", "success");
      const newnominations = this.nominations.filter(
        (nomination) => nomination._id !== id
      );
      this.nominations = newnominations;
    },
  },
  async mounted() {
    this.nominations = await api.getnominations();
  },
};
</script>