const initialState = {
  mobileSelectedTab: 'About',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_TAB':
      return Object.assign({}, state, {
        mobileSelectedTab: action.data.tab
      });
    default:
      return state;
  }
};

export default reducer;