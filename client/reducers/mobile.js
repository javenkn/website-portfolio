const initialState = {
  selectedTab: 'About',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_TAB':
      return Object.assign({}, state, {
        selectedTab: action.data.tab
      });
    default:
      return state;
  }
};

export default reducer;