'use strict';

// const axios = require('axios');

// const HttpError = require('../models/http-error');

const getCoordsForAddress = async address => {
  // try {
  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //       address
  //     )}&key=${process.env.MAPS_API_KEY}`
  //   );

  //   const data = response.data;
  //   console.log(data);
  //   if (!data || data.status === 'ZERO_RESULTS') {
  //     throw new HttpError(
  //       'Could not find location for the specified address',
  //       404
  //     );
  //   }

  //   const coordinates = data.results[0].geometry.location;
  //   return coordinates;
  // } catch (error) {
  //   throw new HttpError(error.message, error.status || 500);
  // }

  // SEND DUMMY COORDINATES FOR NOW
  return { lat: 52.191735, lng: 3.0369282 };
};

module.exports = getCoordsForAddress;
