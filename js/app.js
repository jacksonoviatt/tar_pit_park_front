mammothArray = []

axios.request({
  method: "GET",
  url: "http://127.0.0.1:5000/api/iceage"
}).then(function(response) {
    mammothArray = response.data[0];
    console.log(mammothArray);}
).catch(function (error) {console.log(error)});

