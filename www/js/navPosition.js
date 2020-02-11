function navPosition()
{
  $(document).ready(function(){
    $(window).mousemove(function(event) {
      posTop = event.clientY - 10;
      posLeft = event.clientX - 10;
      $(".eyeTracking").css({"left" : posLeft + "px", "top" : posTop + "px"});
    });
  });
}
navPosition();
