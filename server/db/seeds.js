use hotel_bookings;
db dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Alfonso Mariani",
        email: "alfonsomariani@hotmail.it",
        checkedInStatus: true
    },
    {
        guestName: "Marianne Gautier",
        email: "marianneg@hotmail.fr",
        checkedInStatus: true
    },
    {
        guestName: "Satsuko Smith",
        email: "satsmith@gmal.com",
        checkedInStatus: true
    }
]);