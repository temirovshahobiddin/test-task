<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>

export default {
  name: 'App',
  props: {
    headers: Array
  },
  data: () => ({

  }),
};
</script>
