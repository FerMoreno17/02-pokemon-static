const FAV = "favourites";

export default function handleAddFavourites(id: number) {
  let favourites: number[] = JSON.parse(localStorage.getItem(FAV) || "[]");

  if (favourites.includes(id)) {
    favourites = favourites.filter((pomemonId) => pomemonId !== id);
  } else {
    favourites.push(id);
  }
  localStorage.setItem(FAV, JSON.stringify(favourites));
}

export function existInFavourites(id: number) {
  if (typeof window === "undefined") {
    return false;
  }
  const favourites: number[] = JSON.parse(localStorage.getItem(FAV) || "[]");
  return favourites.includes(id);
}

export function getPokemonsList() {
  return JSON.parse(localStorage.getItem(FAV) || "[]");
}
