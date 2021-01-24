<template>
  <div>
    <h1>Show nomination</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="nominations icon"></i> Name</div>
      <input type="text" readonly :value="nomination.name" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="nominations icon"></i> Note</div>
      <input type="text" readonly :value="nomination.note" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="nominations icon"></i> Twitter</div>
      <input type="text" readonly :value="nomination.linkedin" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="nominations icon"></i> Twitter</div>
      <input type="text" readonly :value="nomination.linkedin" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="nominations icon"></i> Web Links</div>
      <input type="text" readonly :value="nomination.weblinks" />
    </div>

    <div class="actions">
      <router-link
        :to="{ name: 'edit', params: { id: this.$route.params.id } }"
      >
        Edit nomination
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "show",
  data() {
    return {
      nomination: "",
    };
  },
  async mounted() {
    this.nomination = await api.getnomination(this.$route.params.id);
  },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>