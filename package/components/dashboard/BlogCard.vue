<template>
  <div style="margin-top: 20px">
    <v-text-field
      :rules="rules"
      hide-details="auto"
      label="Main input"
    ></v-text-field>
    <v-text-field style="margin-top: 10px;" label="Another input"></v-text-field>
  </div>
</template>
<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>