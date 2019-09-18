<template lang="html">
 <div class="booking-list">
     <booking-item v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking-item>
 </div>
  
</template>

<script>
import BookingsService from '../services/BookingsService.js'
import BookingItem from './BookingItem'


export default {
    name: "bookings-grid",
    props: ["bookings"],
    methods: {
    },
    components: {
        'booking-item': BookingItem
    }

}
</script>

<style lang="css" scoped>

</style>