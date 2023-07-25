const registrationForm = document.getElementById("registrationForm");
const delegatePassSelect = document.getElementById("delegatePass");
const guestPassSelect = document.getElementById("guestPass");
const guestsSection = document.getElementById("guestsSection");

guestPassSelect.addEventListener("change", () => {
  const numGuests = parseInt(guestPassSelect.value);
  guestsSection.innerHTML = ""; // Clear previous guest fields

  if (numGuests > 0) {
    guestsSection.style.display = "block";

    for (let i = 1; i <= numGuests; i++) {
      const guestFields = `
        <h3>Guest ${i}</h3>
        <label for="guestFirstName${i}">First Name:</label>
        <input type="text" id="guestFirstName${i}" name="guestFirstName${i}" required>
        
        <label for="guestLastName${i}">Last Name:</label>
        <input type="text" id="guestLastName${i}" name="guestLastName${i}" required>
        
        <label for="guestEmail${i}">Email:</label>
        <input type="email" id="guestEmail${i}" name="guestEmail${i}" required>
        
        <label for="guestContact${i}">Contact Number:</label>
        <input type="tel" id="guestContact${i}" name="guestContact${i}" required>
      `;
      guestsSection.insertAdjacentHTML("beforeend", guestFields);
    }
  } else {
    guestsSection.style.display = "none";
  }
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // You can implement the server-side logic here for handling the event registration form data
  // and storing it in the database. Additionally, you can send confirmation emails using nodemailer.

  // For demonstration purposes, let's log the form data
  const formData = new FormData(registrationForm);
  for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }

  alert("Event registration successful!");
});
