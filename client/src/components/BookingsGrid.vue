<template lang="html">
 <div class="booking" v-for="booking in bookings">
     <h2>{{booking.guestName}}</h2>
     <p>{{booking.email}}</p>
 </div>
  
</template>

<script>
import BookingsService from '../services/BookingsService.js'
export default {
    name: "bookings-grid",
    // props: ["bookings"],
    methods: {
    }
}
</script>

<style lang="css" scoped>

</style>