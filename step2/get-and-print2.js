function getAndPrintHTML (){

  var https = require("https");
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, function(response){
    var finalResponse = "";
    response.setEncoding("utf8");
    response.on("data", function(data){
    finalResponse += data;
    console.log(finalResponse);
    })
  })
  //console.log(finalResponse);
}

getAndPrintHTML();