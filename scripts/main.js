document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".main_login_form");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const username = document.getElementById("user").value;
      const password = document.getElementById("pass").value;
  
      try {
        const response = await fetch("/.netlify/functions/login");
        const data = await response.json();
  
        const userFound = data.find(
          (player) => player.username === username && player.password === password
        );
  
        if (userFound) {
          alert("deu certo!");
        } else {
          alert("Usuário ou senha inválidos");
        }
      } catch (err) {
        console.error(err);
        alert("Erro ao conectar com o servidor.");
      }
    });
  });
  