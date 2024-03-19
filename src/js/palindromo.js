export const palindromo = (word) => {
  // TODO verificar si la palabra es palindromo
  // Se lee igual de derecha a izquierda e izquierda a derecha

  // Elimina espacios y convierte todo a minúsculas
  const palabraOriginal = word.toLowerCase().replace(/\s/g, "");

  // Verifica si la palabra es igual al revés
  return palabraOriginal === palabraOriginal.split("").reverse().join("");
}; 
