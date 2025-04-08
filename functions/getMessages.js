export async function handler() {
    const API_KEY = process.env.RESTDB_API_KEY;
  
    try {
      const res = await fetch("https://players-6272.restdb.io/rest/chat?max=50", {
        headers: {
          "Content-Type": "application/json",
          "x-apikey": API_KEY,
          "cache-control": "no-cache"
        }
      });
  
      const data = await res.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.message })
      };
    }
  }
  