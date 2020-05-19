function myFunction() {
    setTimeout(function(){ 

      window.location.href = "login.html";

}, 2500);
}

function Submit(){


	var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
  
	var phonelength = /^\d{10}$/;
	var fname = document.form.FirstName.value,
  		lname = document.form.LastName.value,
  		email = document.form.Email.value,
  	    title = document.form.title.value,
  	    pswd = document.form.password.value,
  	    repswd = document.form.re_password.value,
  	    adrs = document.form.add.value,
        phone = document.form.phone.value;
        
		var scountry = document.getElementById("country");
		var selectedcountry = scountry.options[scountry.selectedIndex].value;

		var sstate = document.getElementById("state");
		var selectedstate = sstate.options[sstate.selectedIndex].value;

		console.log(selectedstate);

//local storage
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("email", email);
  localStorage.setItem("title", title);
  localStorage.setItem("pswd", pswd);
  localStorage.setItem("adrs", adrs);
  localStorage.setItem("phone", phone);
  localStorage.setItem("selectedcountry", selectedcountry);
  localStorage.setItem("selectedstate", selectedstate);




	if( title == '' )
	   {
	     document.form.title.focus() ;
		 document.getElementById("errorBox").innerHTML = "Enter your title";
	     return false;
	   }

	if( fname == "" )
	   {
	     document.form.Name.focus() ;
		 document.getElementById("errorBox").innerHTML = "Enter the first name";
	     return false;
	   }

	if( lname == "" )
	   {
	     document.form.LastName.focus() ;
		 document.getElementById("errorBox").innerHTML = "Enter the last name";
	     return false;
	   }
	

   	if (email == "" )
		 {
			document.form.Email.focus();
			document.getElementById("errorBox").innerHTML = "Enter the email";
			return false;
		 }
  	 else if(!emailRegex.test(email))
	     {
    		document.form.Email.focus();
    		document.getElementById("errorBox").innerHTML = "Enter the valid email";
    		return false;
	  	 }

	 if(repswd !=  pswd)
	     {
	  		 document.form.re_password.focus();
	  		 document.getElementById("errorBox").innerHTML = "Passwords are not matching, re-enter again";
	  		 return false;
		}
     if (phone == "" )
       {
         document.form.phone.focus();
         document.getElementById("errorBox").innerHTML = "Enter the phone number";
         return false;
       }

	if(!phone.match(phonelength))
		 {
		   document.form.phone.focus();
		   document.getElementById("errorBox").innerHTML = "Enter the valid phone number of ten digits";
		   return false;
		 }

    if (adrs == "" )
       {
         document.form.add.focus();
         document.getElementById("errorBox").innerHTML = "Enter your address";
         return false;
       }
	

	if(selectedcountry == '') 
		{
	     document.form.country.focus() ;
		 document.getElementById("errorBox").innerHTML = "Select the country";
	     return false;
    	}

    if(selectedstate == '')
    	{
    		document.form.state.focus();
    		document.getElementById("errorBox").innerHTML = "Select the state";
    		return false;
    	}
				

  		if(fname != '' && lname != '' && email != '' && pswd != ''  && phone != '' && adrs !='' && selectedcountry != '' && selectedstate != '')
	        {
    			document.getElementById("errorBox").innerHTML = "Form submitted successfully, please login to view your profile";
    		    myFunction();
				
	    	}

	    else {

    			document.getElementById("errorBox").innerHTML = "Please complete the details, you missed something";
				
	    	}
}

