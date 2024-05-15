"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPasengers = 1,
  price = 199 * numPasengers
) {
  // ES6 LETS YOU SET DEFAULT IN LINE

  // ES 5 WAY
  //   numPasengers = numPasengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPasengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("CLM221");
createBooking("CLM221", 2, 800); // overrides default price
createBooking("CLM221", 2); // takes numPassengers and does calculation
createBooking("CLM221", 5);
// createBooking('CLM221', 1000); You cant skip arguments, here the numPassengers will be set to 1000
// Do this instead, undefined is the same as not setting it so it uses default parameter.
createBooking("CLM221", undefined, 1000);
