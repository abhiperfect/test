
    function validateForm() {
      var username = document.getElementById("username").value.trim();
      var codeLanguage = document.getElementById("codeLanguage").value.trim();
      var sourceCode = document.getElementById("sourceCode").value.trim();
      var errorMessage = document.getElementById("errorMessage");

      if (username === "" || codeLanguage === "" || sourceCode === "") {
        errorMessage.innerHTML = "All fields are required.";
        return false; // Prevent form submission
      }

      return true; // Allow form submission
    }

    
