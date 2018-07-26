$(document).ready(function() { 

  	$('.lightbox').click(function() {
  
  		// get  clicked img
      let img_src = $(this).attr('src');
      let current_a = $(this).parent();
      
      // assign it to img src
      $('.lbx-content img').attr('src', img_src);
   
      $('#lbx').fadeIn();
      $('#right').show();
      $('#left').show();

      // right arrow func
      $('#right').click(function(){
      let next_a = '';
      
      // last image bug fix
      if (current_a.is(':last-child')) {
      		next_a = $('#box a').first();
      }
      
      else {
      		next_a = current_a.next();
      }
      
       let next_img_src = next_a.children('img').attr('src');
       $('.lbx-content img').attr('src', next_img_src);
       current_a = next_a;
           		
      });
      
      // left arrow func
      $('#left').click(function(){
      
      let prev_a = '';
      
      // last image bug fix
      if (current_a.is(':last-child')) {
      		prev_a = $('#box a').first();
      }
      
      else {
      		prev_a = current_a.prev();
      }
      
      let prev_img_src = prev_a.children('img').attr('src');
      $('.lbx-content img').attr('src', prev_img_src);
      current_a = prev_a;
      
      });
    	
      
      // hiding the lightbox
      $('#lbx').click(function() {
       		$('#lbx').fadeOut();
      		$('#right').hide();
       		$('#left').hide();
			});
      
  
  });
  


});