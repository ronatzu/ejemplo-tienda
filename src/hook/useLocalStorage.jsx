import { useState, useEffect } from 'react';

export const useLocalStorage = (clave,valorInicial) => {
  // Obtener el valor almacenado en localStorage al inicio
  const valorAlmacenado = localStorage.getItem(clave);
  const valorInicialParseado = valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial;

  // Estado para mantener el valor actual
  const [valor, setValor] = useState(valorInicialParseado);

  // Actualizar localStorage cuando el valor cambie
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
};
