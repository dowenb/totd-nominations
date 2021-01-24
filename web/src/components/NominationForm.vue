<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info plus icon"></i>name</div>
      <input
        type="text"
        placeholder="Enter name"
        v-model="nomination.name"
      />
    </div>
        <div class="ui labeled input fluid">
      <div class="ui label"><i class="info plus icon"></i>note</div>
      <input
        type="text"
        placeholder="Enter nomination text"
        v-model="nomination.note"
      />
    </div>
        <div class="ui labeled input fluid">
      <div class="ui label"><i class="info plus icon"></i>Twitter</div>
      <input
        type="text"
        placeholder="Enter Twitter handle"
        v-model="nomination.twitter"
      />
    </div>
            <div class="ui labeled input fluid">
      <div class="ui label"><i class="info plus icon"></i>LinkedIn</div>
      <input
        type="text"
        placeholder="Enter LinkedIn..."
        v-model="nomination.linkedin"
      />
    </div>
            <div class="ui labeled input fluid">
      <div class="ui label"><i class="info plus icon"></i>web links</div>
      <input
        type="text"
        placeholder="Enter weblinks..."
        v-model="nomination.weblinks"
      />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "nomination-form",
  props: {
    nomination: {
      type: Object,
      required: false,
      default: () => {
        return {
          nomination: {
            name: "",
            note: "",
            twitter: "",
            linkedin: "",
            weblinks: ""
          },
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    };
  },
  methods: {
    onSubmit: function () {
      this.$emit("createOrUpdate", this.nomination);
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>