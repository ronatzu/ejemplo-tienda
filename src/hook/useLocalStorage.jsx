import { useState, useEffect } from 'react';

export const useLocalStorage = (clave, valorInicial) => {
  const valorAlmacenado = localStorage.getItem(clave);
  const valorInicialParseado = valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial;

  const [valor, setValor] = useState(valorInicialParseado);

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
};
