
   var query;
   var wikiUrl;
 
   $("input[type='text']").keypress(function(event){
	  if(event.which === 13){
		  var query = $(this).val();
      wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+query+'&format=json&callback=wikiCallback'
      $(this).val("");
      $('li').remove();
      
   $.ajax({
      url: wikiUrl,
      dataType: "jsonp",
      success: function(response){
          for(var i=0; i<10; i++){
            $('ul').append("<li> <a href='"+response[3][i]+"' target='_blank'> <h3>"+response[1][i]+"</h3> <p>"+response[2][i]+"</p> </a> </li>");           
          }  
        }
      });
		 }
   });
