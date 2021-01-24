<template>
  <div>
    <h1>Edit nomination</h1>
    <nomination-form @createOrUpdate="createOrUpdate" :nomination=this.nomination></nomination-form>
  </div>
</template>

<script>
import nominationForm from '../components/NominationForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'nomination-form': nominationForm
  },
  data: function() {
    return {
      nomination: {}
    };
  },
  methods: {
    createOrUpdate: async function(nomination) {
      await api.updatenomination(nomination);
      this.flash('nomination updated sucessfully!', 'success');
      this.$router.push(`/nominations/${nomination._id}`);
    }
  },
  async mounted() {
    this.nomination = await api.getnomination(this.$route.params.id);
  }
};
</script>