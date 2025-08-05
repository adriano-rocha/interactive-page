const formModal = document.getElementById("form-modal");

formModal.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = formModal.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  alert("Plano de estudos enviado para: " + email);
  emailInput.value = "";
  modal.style.display = "none";
});
