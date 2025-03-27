document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTableBody");
  
    // Handle form submission
    if (userForm) {
      userForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let contact = document.getElementById("contact").value.trim();
        let address = document.getElementById("address").value.trim();
  
        // Validate inputs
        if (!name || !email || !contact || !address) {
          alert("All fields are required!");
          return;
        }
        // Ensure contact is numeric and at least 10 digits long
        if (!/^\d+$/.test(contact) || contact.length < 10) {
          alert("Please enter a valid numerical contact number (at least 10 digits).");
          return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, email, contact, address });
  
        // Store updated data in localStorage
        localStorage.setItem("users", JSON.stringify(users));
  
        // Reset form
        userForm.reset();
  
        alert("User registered successfully!");
      });
    }
  
    // Display users in table
    if (userTableBody) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      users.forEach(user => {
        let row = document.createElement("tr");
        row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
        userTableBody.appendChild(row);
      });
    }
  });