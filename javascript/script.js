
$(document).ready(function(){


    $('#btn').on('click',function(){

        var jsonOb = {
            "name": "Tutorialspoint",
    "type": "Education",
    "address": {
        "state": "Delhi",
        "country": "India"
    }
  };
   console.log(jsonOb);
$.each(jsonOb, function (key, value) {
    $("#main").append("<p>" + key + ": " + JSON.stringify(value) + "</p>");
});
})
})