var getHTML = require('../step5/http-functions');

var lowercase = function(string){
  console.log(string.toLowerCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, lowercase);