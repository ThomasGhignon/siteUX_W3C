function focus()
{
  $(document).ready(function(){
    var linkTimer = 0;
    $(".targetCercle").hover(function(){
      $(".outsideCercle").toggleClass("outsideCercle_focus");
      $(".loadCercle").toggleClass("loadCercle_focus");
      linkTimer = 1;

      /*setTimeout(function(){
        if (linkTimer == 1)
        {
          console.log("hello");
        }

      }, 200);*/
    });

    $(".targetCercle").mouseout(function(){
      console.log("out");
      linkTimer = 0;
    });
  });
}
focus();
