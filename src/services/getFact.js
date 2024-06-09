const URL_ENDPOING_FACTS = `https://catfact.ninja/fact`;
export const getFact = () => {
  return fetch(URL_ENDPOING_FACTS)
    .then((response) => response.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    });
};
