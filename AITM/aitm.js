// function for getting desiplay/ cancel the popup chat
function openbutton(){
 		document.getElementById("chat-form").style.display= "block";
 	}
 function closebutton(){
 		document.getElementById("chat-form").style.display = "none";
 	}

 	//function to show the values of the form 

 	function saveContactFormdata(){
 		var username=document.getElementById("Username").value;
 		var email=document.getElementById("Email").value;
 		var subject=document.getElementById("Subject").value;
 		var content=document.getElementById("Content").value;
 		
 		//to write the code on the browser

 	 document.writeln("UserName:   "+ username + ""+"<br>");
 	 document.writeln("Email:  " + email + " " +"<br>");
 	 document.writeln("Subject:  " + subject + " "  +"<br>");
 	 document.writeln("Message:   " + content + " "  +"<br>");
 	}

 	// fetching data in JSON format
//  $.ajax({
//   type: "POST",
//   url: "serverUrl",
//   data: formData,
//   success: function (){
//   		var username=document.getElementById("Username").value;
//  		var email=document.getElementById("Email").value;
//  		var subject=document.getElementById("Subject").value;
//  		var content=document.getElementById("Content").value;
//   },
//   dataType: "json",
//   contentType : "application/json"
// });

//funtion to display blog form data on browser.
	function saveBlogFormdata(){
	 		var username=document.getElementById("name").value;
	 		var email=document.getElementById("email").value;
	 		var content=document.getElementById("message").value;	 	
			 document.writeln("Name:   "+ username + ""+"<br>");
			 document.writeln("Email:  " + email + " " +"<br>"); 	
			 document.writeln("Message:   " + content + " "  +"<br>");
	 	}

	
	
