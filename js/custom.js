
$('.closebtn').hide();
  function openNav() {
document.getElementById("mySidenav").style.width = "100%";
    $(".submenu1").click();  
    $('body').addClass('no-scroll');
    $('.openbtn').hide();    
    $('.closebtn').show();
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
     $('body').removeClass('no-scroll');
     $('.closebtn').hide();
     $('.openbtn').show();
  }
  $(function () {
    $('.dropdown-btn').click(function(e) {
      e.preventDefault();
   var toggleClass = $(this).hasClass('active') ? true : false;
 $('.dropdown-btn').removeClass('active');    
    if(!toggleClass)
      $(this).toggleClass('active');         
	 var contentPanelId = jQuery(this).attr("data-target");
      $('.sub-menu-data').removeClass('subdatashow');
       $(this).find(".sub-menu-data").toggleClass('subdatashow');
  });

 $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.site-header').addClass('newClass');
    } else {
       $('.site-header').removeClass('newClass');
    }
});  
});
//$('#SiteNav li.site-nav--has-dropdown').hide();
$('#rightsitenav li.site-nav--has-dropdown').click(function(){
   if (!$(this).hasClass('menu-open')) {

        $(this).addClass('menu-open');

    } else {

        $(this).removeClass('menu-open');

    }
  
    $(this).children('div').stop().slideToggle(400);
});




