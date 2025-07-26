// ===================================
//   FORMULÁRIO DE CONTATO
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const submitBtn = document.querySelector(".submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Capturar dados do formulário
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validação básica
      if (!name || !email || !subject || !message) {
        showMessage("Por favor, preencha todos os campos.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showMessage("Por favor, insira um email válido.", "error");
        return;
      }

      // Preparar o email
      const emailSubject = `[Portfolio] ${subject}`;
      const emailBody = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;

      // Criar link mailto
      const mailtoLink = `mailto:alan.ogoncalves@outlook.com?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;

      // Abrir cliente de email
      window.location.href = mailtoLink;

      // Mostrar mensagem de sucesso
      showMessage(
        "Cliente de email aberto! Por favor, envie a mensagem.",
        "success"
      );

      // Limpar formulário após um delay
      setTimeout(() => {
        contactForm.reset();
      }, 2000);
    });
  }
});

// Função para validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para mostrar mensagens
function showMessage(text, type) {
  // Remove mensagem anterior se existir
  const existingMessage = document.querySelector(".contact-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Criar nova mensagem
  const messageDiv = document.createElement("div");
  messageDiv.className = `contact-message ${type}`;
  messageDiv.textContent = text;

  // Inserir mensagem antes do formulário
  const contactContent = document.querySelector(".contact-content");
  contactContent.insertBefore(messageDiv, contactContent.firstChild);

  // Remover mensagem após 5 segundos
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, 5000);
}
