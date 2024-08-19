<template>
  <v-app>
    <page-title>Список заявок</page-title>

    <default-table :headers=headers></default-table>

  </v-app>
</template>

<script>

import DefaultTable from '@/components/DefaultTable.vue';
import PageTitle from '@/components/PageTitle.vue';



export default {

  name: 'App',
  components: {
    DefaultTable,
    PageTitle

  },

  data: () => ({
    headers: [
      {
        text: "№",
        value: 'number'
      },
      {
        text: "Создана",
        value: 'created_at'
      },
      {
        text: "Адрес",
        value: 'premise.apartment'
      },
      {
        text: "Заявитель",
        value: 'applicant'
      },
      {
        text: "Описание",
        value: 'description'
      },
      {
        text: "Срок",
        value: 'due_date'
      },
      {
        text: "Статус",
        value: 'status'
      },
    ]
  }),
};
</script>
