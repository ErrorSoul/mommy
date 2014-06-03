$(".center-block").click(function(){
    $bg = $("#bg");
    $shake = $(".shake");
    $shake.fadeOut(2000,function(){
	    $shake.html(' <img class="center-block"  src="images/li.jpg" alt="альтернативный текст">');
	$bg.hide();
	$shake.fadeIn(2000,function(){
	    $bg.html(' <img src="images/main.jpg" alt="">');
	    $bg.fadeIn(2000,function(){
	    $shake.fadeOut();
		});
	});
	});
    
   
    
   
})
