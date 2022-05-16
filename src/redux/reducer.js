import { DISHES } from "../Shared/dishes";
import { PROMOTIONS } from "../Shared/promotions";
import { LEADERS } from "../Shared/leaders";
import { COMMENTS } from "../Shared/comments";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  selectedDish: null,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
