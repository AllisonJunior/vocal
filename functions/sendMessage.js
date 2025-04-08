export async function handler(event) {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }
  
    const { user, message } = JSON.parse(event.body);
    const API_KEY = process.env.RESTDB_API_KEY;
  
    try {
      const response = await fetch("https://players-6272.restdb.io/rest/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": API_KEY,
          "cache-control": "no-cache",
        },
        body: JSON.stringify({ user, message }),
      });
  
      if (!response.ok) {
        const error = await response.text();
        return {
          statusCode: response.status,
          body: JSON.stringify({ error }),
        };
      }
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, data }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.message }),
      };
    }
  }
  