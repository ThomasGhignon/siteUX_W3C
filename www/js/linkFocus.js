function focusLink(){
  $(document).ready(function(){
    $(".targetCercle").mouseenter(function(){
      $(".outsideCercle").addClass("outsideCercle_focus");
      $(".outsideCercle").removeClass("outsideCercle");
      $(".loadCercle").addClass("loadCercle_focus");
      $(".loadCercle").removeClass("loadCercle");
      linkTimer = true;
      var timer = 0;
      directLink(timer);
    });
    $(".outsideCercle").mouseleave(function(){
      $(".outsideCercle_focus").addClass("outsideCercle");
      $(".outsideCercle_focus").removeClass("outsideCercle_focus");
      $(".loadCercle_focus").addClass("loadCercle");
      $(".loadCercle_focus").removeClass("loadCercle_focus");
      linkTimer = false;
    });
  });
}
focusLink();

function directLink(timer, path)
{
  var setTimer = directLink_timer(timer);
  console.log(setTimer);
  if (setTimer == true)
  {
    $(location).attr('href', "./home.html");
  }
}

function directLink_timer(timer)
{
  if (linkTimer == true)
  {
    timer++;
    console.log(timer);
    if (timer < 10)
    {
      window.setTimeout("directLink("+timer+");",100);
    }
    else
    {
      return true;
    }
  }
}
