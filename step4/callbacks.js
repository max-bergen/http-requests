var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step4.html"
  };

function printHTML(html) {
  console.log(html);
};

function getHTML(options, func){

  var https = require("https");

  https.get(options, function(response){
    var finalResponse = "";
    response.setEncoding("utf8");
    response.on("data", function(data){
    finalResponse += data;
    func(finalResponse);
    })
  })

};

getHTML(requestOptions, printHTML);