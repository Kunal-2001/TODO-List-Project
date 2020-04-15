// selecting the li and using on() method form jquery for a line through when clicked over
  // an li 
$("ul").on("click", "li" , function(event){
$(this).toggleClass("completed");
});

$("ul").on("click" , "span" , function(event){

	$(this).parent().fadeOut(function(){
       
$(this).remove();
	});

})

// keypress keyword is used to enter into an event by counting the key pressed by the user

$("input").keypress(function(event){
 
// here event.which == 13 simplifies that the pressed key code is 13 which is for "enter"
  if(event.which === 13){
  // this will be used to extract text written by a user
   var text = $(this).val(); 


   $(this).val("");
// here append will add the next todo to our li list
   $("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span> <strong>" + text + "</strong></li>");

  }

})

//this will select the plus icon
$(".fa-plus").click(function(){
    //this will toggle the input form 
	$("input").fadeToggle();
})







