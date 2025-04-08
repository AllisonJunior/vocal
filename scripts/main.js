document.querySelector(".main_login_form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = document.querySelector("#user").value;
  const pass = document.querySelector("#pass").value;

  const res = await fetch("/.netlify/functions/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, pass })
  });

  const data = await res.json();

  if (res.ok && data.success) {
    alert("Login realizado com sucesso!");
    window.location.href = "/chat"; // ✅ ROTA LIMPA
  } else {
    alert("Usuário ou senha incorretos.");
  }  
});
