const btnTema = document.getElementById("btn-tema");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const modal = document.getElementById("modal");
const btnDownload = document.getElementById("btn-download");
const fecharModal = document.getElementById("fechar-modal");
const formModal = document.getElementById("form-modal");

const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
}

btnTema.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("theme", "dark");
  }
});

btnDownload.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("show");
});

fecharModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

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
  modal.classList.remove("show");
});