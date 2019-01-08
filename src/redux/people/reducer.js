import actions from "./actions";

const initState = {
  list: {
    data: [],
    loading: false,
    error: null,
    meta: {
      count: null,
      current_page: 1
    }
  }
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_PEOPLE:
      return {
        ...state,
        list: {
          ...state.list,
          error: null,
          data: [],
          loading: true
        }
      };

    case actions.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: null,
          data: action.payload.data.results,
          meta: {
            ...state.list.meta,
            count: action.payload.data.count
          }
        }
      };

    case actions.FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: true,
          data: []
        }
      };

    default:
      return state;
  }
}
