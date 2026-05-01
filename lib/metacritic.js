// Función para obtener una lista de personajes (ideal para la pantalla principal)
export async function getCharacters(page = 1) {
  // Construimos la URL. Le paso la página como parámetro por si quieres hacer paginación luego.
  const API_URL = `https://thesimpsonsapi.com/api/characters?page=${page}`;

  try {
    const response = await fetch(API_URL);

    // Verificamos que la petición haya ido bien
    if (!response.ok) {
      throw new Error("¡D'oh! Falló la conexión con la API");
    }

    const data = await response.json();

    // De tu JSON de ejemplo, sabemos que la lista de personajes viene en el array "results"
    const characters = data.results;

    // Usamos map para "limpiar" los datos y quedarnos solo con lo que necesitamos
    return characters.map((char) => {
      // Extraemos (desestructuramos) las propiedades del objeto de la API
      const { id, name, occupation, status, portrait_path } = char;

      // Creamos la URL completa de la imagen.
      // Como el path viene así: "/character/1.webp", hay que agregarle el dominio principal.
// ✅ La ruta correcta hacia el CDN
const imageUrl = `https://cdn.thesimpsonsapi.com/500${portrait_path}`;
      // Devolvemos el objeto limpio
      return {
        id,
        name,
        occupation: occupation || "Desempleado", // Por si no tiene ocupación
        status,
        image: imageUrl,
      };
    });
  } catch (error) {
    console.error("Error obteniendo los personajes:", error);
    return []; // Devolvemos un array vacío en caso de error para que no se rompa tu app
  }
}

// Función para obtener los detalles de UN solo personaje (usando su ID)
// OJO: La API que me pasaste no tiene un endpoint para pedir 1 solo personaje directo,
// así que tendremos que buscarlo dentro de la lista completa.
export async function getCharacterDetails(characterId) {
  const API_URL = `https://thesimpsonsapi.com/api/characters`;

  try {
    // En una API ideal, aquí llamarías a /api/characters/1, pero como no sabemos si existe,
    // pedimos la lista y filtramos (esto es solo un ejemplo adaptado a tu JSON)
    const response = await fetch(API_URL);
    const data = await response.json();

    // Buscamos el personaje que coincida con el ID que pasamos
    const characterInfo = data.results.find((char) => char.id === characterId);

    if (!characterInfo) {
      throw new Error("Personaje no encontrado");
    }

    // Armamos el objeto detallado
    return {
      name: characterInfo.name,
      age: characterInfo.age || "Desconocida",
      gender: characterInfo.gender,
      occupation: characterInfo.occupation,
      status: characterInfo.status,
      image: `https://thesimpsonsapi.com${characterInfo.portrait_path}`,
      // Extra: ¡Sacamos sus frases típicas!
      phrases: characterInfo.phrases || [],
    };
  } catch (error) {
    console.error("Error obteniendo el detalle:", error);
    return null;
  }
}
