var getHTML = require('../step5/http-functions');

var reverse = function(string){
  var reversed = string.split("").reverse().join("");
  console.log(reversed);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, reverse);