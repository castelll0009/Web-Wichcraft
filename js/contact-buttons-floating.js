var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});


// to detect  if  you are in mobil

if(screen.width <= 800){
    //yeah is on mobile    
$("#contact-mobile").css("display","block");
  $("#contact-pc").css("display","none");
}else{
    //PC you re  in pc
    $("#contact-mobile").css("display","none");
    $("#contact-pc").css("display","block");
}
// using jQuery
// var mainDiv =  $('#main-button');
// mainDiv.on('click', function(){
//   $(this).find('i').toggleClass('fa-times');
//   $(this).toggleClass('open');
// });