export function aleatorio(lista){
    const posição = Math.floor(Math.random()* lista.length);
    return lista[posição];
  }