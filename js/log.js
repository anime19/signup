function login(){


 	
  	var	id = document.form.Email.value,
  	    
  	    paswd = document.form.password.value;
        

    var namef = localStorage.getItem("fname");
    var namel = localStorage.getItem("lname");
    var mailid = localStorage.getItem("email");
     var title = localStorage.getItem("title");
     var password = localStorage.getItem("pswd");
     var address = localStorage.getItem("adrs");
     var phoneno = localStorage.getItem("phone");
     var country = localStorage.getItem("selectedcountry");
     var state = localStorage.getItem("selectedstate");
     
 			if (id == "" )
		 {
			document.form.Email.focus();
			document.getElementById("errorBox").innerHTML = "Enter the email";
			return false;
		 }

		 if (paswd == "" )
		 {
			document.form.password.focus();
			document.getElementById("errorBox").innerHTML = "Enter the password";
			return false;
		 }

  		if(id === mailid && paswd === password)
	        {
    			document.getElementById("errorBox").innerHTML = "Yor have successfully logged in";
				alert(
                 "Your Profile :=" + "\n" +

				 "Title : " +title+ "\n"+
				 "First Name : " +namef+ "\n" +
				 "Last Name : " +namel+ "\n" +
				 "Email : " +mailid+ "\n" +
				
				 "Phone Number : " +phoneno+ "\n" +
				 "Address : " +address+ "\n" +
				 "Country : " +country+ "\n" +
				 "State/Province : " +state+ "\n"
				 );
	    	}
	    	else {
	    		alert("Either you've entered wrong credentials or you are'nt registered");
	    	}
}

