import { getItems } from "../services/getItems";

//La prop params tiene que llamarse igual que el archivo [].js

export const getPathsFromIds = async () => {
  const items = await getItems();
  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title), 
      },
    };
  });
  return ids;
};

export const getItemData = async (id) => { //Next espera strings y nuestros ID's eran numéricos
    const items = await getItems();
    const product = items.find(item => convertToPath(item.title) === id)

    return {
      id: id, 
      data: product,
    }
}

export const convertToPath = (title) => {
  return title.toLowerCase().replace(/\s\g, "-"/)
}
