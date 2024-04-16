// API.js

// Definimos una clase para interactuar con la API de Giphy
class GiphyAPI {
    // El constructor recibe la clave de API como parámetro
    constructor(apiKey) {
        // Guardamos la clave de API y la URL base de la API de Giphy
        this.apiKey = apiKey;
        this.baseURL = 'https://api.giphy.com/v1/gifs/';
    }

    // Método para obtener un GIF aleatorio basado en un tag
    async getRandomGIF(tag) {
        // Construimos la URL de la solicitud a la API de Giphy
        const url = `${this.baseURL}random?api_key=${this.apiKey}&tag=${tag}`;
        // Realizamos la solicitud utilizando fetch y esperamos la respuesta
        const response = await fetch(url);
        // Parseamos la respuesta como JSON
        const data = await response.json();
        // Retornamos la URL del GIF obtenido de los datos recibidos
        return data.data.image_original_url;
    }
}

// Exportamos la clase para poder utilizarla en otros archivos
export default GiphyAPI;
