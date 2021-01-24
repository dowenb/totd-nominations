<template>
  <div>
    <h1>New nomination</h1>
    <nomination-form @createOrUpdate="createOrUpdate"></nomination-form>
  </div>
</template>

<script>
import nominationForm from '../components/NominationForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-nomination',
  components: {
    'nomination-form': nominationForm
  },
  methods: {
    createOrUpdate: async function(nomination) {
      const res = await api.createnomination(nomination);
      this.flash('nomination created', 'success');
      this.$router.push(`/nominations/${res._id}`);
    }
  }
};
</script>