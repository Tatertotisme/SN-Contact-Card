document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  
  // Display saved contact
  document.getElementById("saved-name").textContent = name;
  document.getElementById("saved-phone").textContent = phone;
  document.getElementById("saved-email").textContent = email;
  document.getElementById("saved-address").textContent = address;
  document.getElementById("saved-contact").style.display = "block";
  
  // Optionally, you can save these details to the note content
  const noteContent = JSON.stringify({ name, phone, email, address }, null, 2);
  console.log("Saved Contact Data:", noteContent);
});
