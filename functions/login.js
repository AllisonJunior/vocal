export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  const { user, pass } = JSON.parse(event.body);
  const API_KEY = process.env.RESTDB_API_KEY;

  try {
    const response = await fetch(`https://players-6272.restdb.io/rest/players?q={"user":"${user}","pass":"${pass}"}`, {
      headers: {
        "content-type": "application/json",
        "x-apikey": API_KEY,
        "cache-control": "no-cache"
      }
    });

    const data = await response.json();

    if (data.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, error: "Login inválido" }),
      };
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Erro interno no servidor" }),
    };
  }
}
