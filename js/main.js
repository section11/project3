$( document ).ready(function() {
  var imageClicked = false;
  $( "#brothers-pic" ).click(function() {
    if(imageClicked){
      $(this).attr('src', "images/brothers.jpg");
      imageClicked = false;
    }else{
      $(this).attr('src', "images/pks_crest.png");
      imageClicked = true;
    }
  });
});
