<template>
    <div class="page_title">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageTitle',
  }
  </script>
  
  <style lang="scss" scoped>
  .page_title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
  }
  </style>