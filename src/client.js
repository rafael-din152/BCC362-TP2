const axios = require('axios')

axios.post('http://172.17.255.255/16:8080', {
    message: "Hi"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });