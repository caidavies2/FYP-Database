$(document).ready(function(){

var testData = "monkeh";

  $('button').click(function(){
      $.ajax({
     url: 'aj.php', //This is the current doc
     type: "POST",
     data: {name:testData},
     success: function(data){
         console.log(data);
     }
});

  });

});
