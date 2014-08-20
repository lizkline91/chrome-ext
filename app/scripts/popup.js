$(document).ready(function(){

  $.ajax({
    url:'http://www.reddit.com/r/CatsStandingUp.json',
    mothod:'GET',
    success:function (data){
      var catUp = "<ul>"
      for(var i = 0; i < 6; i++){
        catUp +=
          "<li>" + "<img src=\""
          + data.data.children[i].data.thumbnail + "\">" + "</li>"
      }

      catUp += '</ul>';

      $(".cats").html(catUp);
      console.log(data.data.children[i].data.thumbnail)
    }

  });


});
