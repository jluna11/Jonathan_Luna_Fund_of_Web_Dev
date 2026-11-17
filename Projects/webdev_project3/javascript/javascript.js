const contactButton = document.getElementById("contact-button");
const contactInfo = document.getElementById("contact-info");

contactButton.addEventListener("click", () => {
  contactInfo.textContent = "Here is my contact info!: jluna11@hawk.illinoistech.edu";
  contactInfo.hidden = false;
});