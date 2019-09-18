<template>
  <div id="app">
    <!-- <h1>Bookings Form</h1> -->
    <bookings-form></bookings-form>
    <!-- <bookings-grid :bookings="bookings"></bookings-grid> -->
  </div>
</template>

<script>
import { eventBus } from './main.js'
import BookingsService from './services/BookingsService.js';
import BookingsForm from './components/BookingsForm.vue';
// import BookingsGrid from './components/BookingsGrid.vue';


export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    // 'bookings-grid': BookingsGrid
  },
  mounted(){
  this.fetchData();

  eventBus.$on('booking-added', booking => this.bookings.push(booking));

},
methods: {
  fetchData(){
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);
  }
}
}

</script>

<style>


</style>
