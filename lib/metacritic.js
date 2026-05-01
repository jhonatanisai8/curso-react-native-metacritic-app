// Función para obtener una lista de personajes (ideal para la pantalla principal)
export async function getCharacters(page = 1) {
  const API_URL = `https://thesimpsonsapi.com/api/characters?page=${page}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("¡D'oh! Falló la conexión con la API");
    }

    const data = await response.json();
    const characters = data.results;

    return characters.map((char) => {
      // 1. Agregamos 'phrases' aquí 👇
      const { id, name, occupation, status, portrait_path, phrases } = char;

      const imageUrl = `https://cdn.thesimpsonsapi.com/500${portrait_path}`;
      
      return {
        id,
        name,
        occupation: occupation || "Desempleado",
        status,
        image: imageUrl,
        // 2. Lo pasamos al objeto limpio 👇
        phrases: phrases || [], 
      };
    });
  } catch (error) {
    console.error("Error obteniendo los personajes:", error);
    return [];
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
