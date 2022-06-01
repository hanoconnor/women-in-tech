const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  fetch(contactForm.getAttribute("action"), {
    method: "POST",
    headers: {
      Accept: "application/x-www-form-urlencoded;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams(formData).toString(),
  }).then((res) => {
    if (res) {
      alert(
        "Thank you for your message. Your form has been submitted successfully."
      );
    }
  });

  contactForm.reset();
});
