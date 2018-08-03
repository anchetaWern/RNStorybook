import { combineReducers } from "redux";
import CardsReducer from "./CardsReducer";

export default combineReducers({
  cards: CardsReducer
});
