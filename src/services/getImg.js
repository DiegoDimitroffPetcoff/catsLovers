export const getImg = async ({ fact }) => {
  const response = await fetch(
    `https://cataas.com/cat/says/${fact}?size=50&color=red&json=true`
  );
  const data = await response.json();
  const { _id } = data;
  const url = `/cat/${_id}/says/${fact}`;
  return `https://cataas.com${url}`;
};
