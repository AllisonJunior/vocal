// Envia para a função serverless
try {
    const res = await fetch("/.netlify/functions/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaMensagem)
    });
  
    const result = await res.json();
  
    if (res.ok && result.success) {
      input.value = "";
      carregarMensagens(); // recarrega o histórico
    } else {
      console.error("Erro no envio:", result.error);
    }
  } catch (err) {
    console.error("Erro:", err);
  }
  