$(document).ready (function(){
	$("#reg").click(function(){
 var EmailAddress=$('#EmailAddress').val();
  var password=$('#pass').val();
  var comments=$('#comments').val();
  var url="http://localhost:8080/CompanyIntranet/vist?operation=add&EmailAddress="+EmailAddress+"&pass="+password+"&comments="+comments;

  $.ajax(url)
.done(function(result) {
  console.log(result);
  //alert(result);
  })
  .fail(function(result){
    console.log(result);
    //alert("failed");
  });
   
});

})