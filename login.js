/*function fivereload(){
        location.reload()
        setTimeout(function(){fivereload()}, "5000")
      }
      setTimeout(function(){fivereload()}, "5000")
      */
      // Get the input field
      var input = document.getElementById("pswinput");

      // Execute a function when the user releases a key on the keyboard
      input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("logonbtn").click();
        }
      });
      if (localStorage.getItem("isloggedin") === "yes") {
        document.getElementById("loginform").style.display = "none";
        document.getElementById("loginbtn").style.display = "none";
        document.getElementById("logoutbtn").style.display = "block";
        user = localStorage.getItem("user");
        document.getElementById("banner").innerHTML = "Welcome to the Crime Fighters Detective Agency, " + user;
        document.getElementById("portal").style.display = "block";
        document.getElementById("plzsi").style.display = "none";
        if(user == "justinfu718" || user == "ibhavyaix"){
          document.getElementById("admin").style.display = "block";
          document.getElementById("adminerror").style.display = "none";
        }
      }
      if (sessionStorage.getItem("isloggedin") === "yes") {
        document.getElementById("loginform").style.display = "none";
        document.getElementById("loginbtn").style.display = "none";
        document.getElementById("logoutbtn").style.display = "block";
        user = sessionStorage.getItem("user");
        document.getElementById("banner").innerHTML = "Welcome to the Crime Fighters Detective Agency, " + user;
        document.getElementById("portal").style.display = "block";
        document.getElementById("plzsi").style.display = "none";
        if(user == "justinfu718" || user == "ibhavyaix"){
          document.getElementById("admin").style.display = "block";
          document.getElementById("adminerror").style.display = "none";
        } else {
          document.getElementById("anc").innerHTML = "Your Account is managed by users justinfu718 and ibhavyaix."
        }
      }
      var user;
      var listuser = ["tina", "ibhavyaix", "justinfu718", "adityavelusamy", "ishaurya.garg", "iaavya.garg", "gosneal", "YashwantSpiney", "LegendaryBot.9271xp", "redwood"];
      var pass = ["Sgk=", "YmhhdnlhZHdpdmVkaQ==", "akZ1MDkwMjI2", "YWRpdHlhdmVsdXNhbXk=", "c2hhdXJ5YWdhcmc=", "YWF2eWFnYXJn", "bmVhbGdvc3dhbWk=", "UGluZXlWaW5vdGhAMjI=", "OTkyNzE=", "cXdlcnR5MDk3MTQ="];
      // Get the modal
      var modal = document.getElementById('id01');
      var gmodal = document.getElementById('id02');
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      window.onclick = function(event) {
        if (event.target == gmodal) {
          gmodal.style.display = "none";
        }
      }
      document.getElementById("logonbtn").addEventListener("click", function() {
        var username = document.getElementById("usernameinput").value;
        var password = btoa(document.getElementById("pswinput").value);
        if (listuser.includes(username)) {
          var passindex = listuser.indexOf(username);
          if (pass[passindex] === password) {
            document.getElementById("loginform").style.display = "none";
            document.getElementById("loginbtn").style.display = "none";
            user = username;
            sessionStorage.setItem("isloggedin", "yes");
            sessionStorage.setItem("user", user);
            if (document.getElementById("rememberuser").checked) {
              localStorage.setItem("isloggedin", "yes");
              localStorage.setItem("user", user);
            }
            document.getElementById("logoutbtn").style.display = "block";
            document.getElementById("banner").innerHTML = "Welcome to the Crime Fighters Detective Agency, " + user;
            document.getElementById("portal").style.display = "block";
            document.getElementById("plzsi").style.display = "none";
            location.href = "https://justin226.github.io/the-crime-fighters-detective-agency"
          } else {
            document.getElementById("error").innerHTML = "Incorrect Password";
            document.getElementById("error").style.display = "block";
          }
        } else {
          document.getElementById("error").innerHTML = "Incorrect Username";
          document.getElementById("error").style.display = "block";
        }
      });
      document.getElementById("logoutbtn").addEventListener("click", function() {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
      });
