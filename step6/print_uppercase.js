var getHTML = require('../step5/http-functions');

var uppercase = function(string){
  console.log(string.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, uppercase);