 function login() {
      const userInput = document.getElementById("userInput").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("error-msg");

      if (!userInput || !password) {
        errorMsg.textContent = "Please enter both fields.";
        return;
      }

      // Simulated login check (can be replaced with real auth)
      // Redirecting to index.html
      window.location.href = "index.html";
    }