export const isLastPage = state =>
  state.people.list.meta.current_page >=
  Math.round(state.people.list.meta.count / 10);
