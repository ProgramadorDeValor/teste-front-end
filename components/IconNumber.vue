<template>
  <v-row align="end">
    <v-icon :color="color">
      {{ icon }}
    </v-icon>
    <v-div class="pl-2">
      <h5>{{ number }}</h5>
    </v-div>
  </v-row>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'IconNumber',
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: ''
    }

  }
}
</script>
