function parallax()
{
  $(window).on("scroll",function()
  {
    var offsetWindow = $(window).scrollTop();
    $("header").css({backgroundPosition:"0px -"+offsetWindow*0.2+"px"});
    console.log(offsetWindow);
  });
}
parallax();
