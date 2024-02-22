const axios = require('axios');

const token = '4fba95dbf46cd77d415830c228c9ef01';

axios.get('https://api.themoviedb.org/3/movie/', { 
    headers: {
      'Authorization': 'Bearer ' + token
    } 
  })
  .then(response => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });