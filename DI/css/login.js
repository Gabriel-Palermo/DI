document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Dados fixos de admin para testes (NUNCA usar assim em produção)
  const adminUsuario = "admin";
  const adminSenha = "1234";

  if (usuario === adminUsuario && senha === adminSenha) {
    window.location.href = "cadastro-produtos.html"; // página restrita
  } else {
    document.getElementById("mensagemErro").textContent = "Usuário ou senha inválidos.";
  }
});