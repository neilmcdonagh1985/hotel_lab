<template lang="html">
  <div class='booking-item'>
  <h3>{{ booking.guestName}}</h3>
  <p>{{ booking.email}}</p>
  </div>
  
</template>

<script>
export default {
    name: 'booking-item',
    props: ['booking']

}
</script>

<style lang="css" scoped>

</style>