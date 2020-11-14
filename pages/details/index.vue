<template>
  <v-layout column wrap align="center" justify="center">
    <video-detail-card :item="[]" />
  </v-layout>
</template>
<style scoped>

</style>
<script>
import VideoDetailCard from '../../components/VideoDetailCard'
export default {
  name: 'Index',
  components: { VideoDetailCard }
}
</script>
