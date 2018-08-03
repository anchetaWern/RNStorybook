import { FAVORITED_CARD } from "./types";

export const favoritedCard = id => {
  return {
    type: FAVORITED_CARD,
    payload: id
  };
};
