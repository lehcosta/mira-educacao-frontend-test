const actions = {
  FETCH_PEOPLE: "FETCH_PEOPLE",
  FETCH_PEOPLE_SUCCESS: "FETCH_PEOPLE_SUCCESS",
  FETCH_PEOPLE_FAILURE: "FETCH_PEOPLE_FAILURE",

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
  })
};

export default actions;
