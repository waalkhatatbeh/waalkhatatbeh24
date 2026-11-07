document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check that all required fields contain a value.
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const comments = document.getElementById("comments").value.trim();

    if (!fullName || !email || !country || !comments) {
      alert("Please fill in all fields before submitting the form.");
      return;
    }

    alert("Your form has been submitted successfully. Thank you for contacting me!");
    contactForm.reset();
  });
});
