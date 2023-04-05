const props = "/props";
const redux = "/redux";
const bc = '/button-counter'
const cards = '/cards'

const routes = {
  drilling: {
    bc: props + bc,
    cards: props + cards
  },
  redux: {
    bc: redux + bc,
    cards: redux + cards
  },
};

export default routes;
