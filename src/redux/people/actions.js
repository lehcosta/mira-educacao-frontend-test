const actions = {
  FETCH_PEOPLE: "FETCH_PEOPLE",
  FETCH_PEOPLE_SUCCESS: "FETCH_PEOPLE_SUCCESS",
  FETCH_PEOPLE_FAILURE: "FETCH_PEOPLE_FAILURE",

  FETCH_PEOPLE_SET_PAGE: "FETCH_PEOPLE_SET_PAGE",

  fetchPeople: payload => ({
    type: actions.FETCH_PEOPLE,
    payload
  }),

  fetchPeopleSuccess: payload => ({
    type: actions.FETCH_PEOPLE_SUCCESS,
    payload
  }),

  fetchPeopleFailure: payload => ({
    type: actions.FETCH_PEOPLE_FAILURE,
    payload
  }),

  fetchPeopleSetPage: payload => ({
    type: actions.FETCH_PEOPLE_SET_PAGE,
    payload
  })
};

export default actions;
