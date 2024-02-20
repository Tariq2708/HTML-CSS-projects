

  function submitmail() {
        var userEmail = document.getElementById("userEmail").value;
        if(userEmail !== "") {
          document.getElementById("submitMessage").style.display = "block";
        }
        setTimeout(function() {
          submitMessage.style.display = "none";
        }, 2000);
        
      }