import axios from "axios";

const api = axios.create({
  baseURL: "https://criptoya.com/api",
});

export async function detallesMoneda() {
  try {
    const response = await api.get("/btc/ars");
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
}

export async function guardadoDeMonedas() {
  try {
    const response = await api.get("/transactions");
    return response.data;
  } catch (error) {
    console.errer("Erro a guardar los datos en la API:", error);
  }
}
export default api;
