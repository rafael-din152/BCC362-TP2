const axios = require('axios')

axios.post('http://localhost:8080', {
    message: "Hi"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });