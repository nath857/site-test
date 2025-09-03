// Script simple pour le formulaire
document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");
if (form) {
form.addEventListener("submit", (e) => {
e.preventDefault();
alert("Merci ! Votre message a été envoyé (simulation).");
form.reset();
});
}
});
